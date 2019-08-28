var passport = require('passport');
var db = require('../models');
var localStrategy = require('passport-local');

passport.use(new localStrategy(
    {
    usernameField: "email"
},
    function(email, password, done) {
        db.User
        .findOne({where: {email: email}})
        .then((dbUser) => {
            if(!dbUser) {
                return done (null, false, {
                    message: "We couldn't find that email"
                }); 
            }
            else if (!dbUser.validPassword(password)) {
                return done (null, false, {
                    message: "Password incorrect"
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        if (err) {return done(err)}
        done(null, user);
    });
});

module.exports = passport;

