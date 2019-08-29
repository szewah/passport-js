var passport = require('../config/passport');
var path = require('path');

module.exports = function(app) {

    /* GET login page */
    app.get('/login', (req, res, next) => {
        console.log(req.user);
        if (req.user) {
            res.redirect('/home');
        }
        res.sendFile(path.join(__dirname, "../views/login.html"))
    });

    /* POST login page email and password*/

    app.post('/api/login', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), 
    function (req, res) {
        console.log('user', req.user);
        res.redirect('/home');
    }
    );

    // app.post('/api/login', function(req, res) {
    //     console.log(req.body);
    // })
 
};

