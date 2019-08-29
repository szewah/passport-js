var passport = require('passport');
var db = require('../models');
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    {
    usernameField: "email",
    passwordField: "password"
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

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

  
  

module.exports = passport;

