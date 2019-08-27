var passport = require('passport');
var User = require('../models').User;
var bcrypt = require('bcryptjs');
var localStrategy = require('passport-local');

// module.exports = function(passport) {
passport.use({usernameField: 'email'}, (email, password, done) => {
    User
    .findOne({where: {email: email}})
    .then(user => {
        if (!user) {
            return done (null, false, {message: "We couldn't find that email"});    
        }
        bcrypt.compare(password, user[0].dataValues.password, (err, isMatch) => {
            if (err) {console.log("Passowrd error")};
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {message: "Your password is incorrect"});
            }
        });
    });
});
// };

passport.serializeUser(function(user, done) {
    done(null, user);
  });

passport.deserializeUser(function(id, done) {
    User.findById(function(err, user) {
    done(err, user);
    });
});

module.exports = passport;

