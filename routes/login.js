var passport = require('passport');
var path = require('path');

module.exports = function(app) {

    /* GET login page */
    app.get('/login', (req, res, next) => {
        res.sendFile(path.join(__dirname, "../views/login.html"))
    });

    app.post('/api/login', passport.authenticate("local", {
        failureRedirect: "/registration"
        }), (req, res) => {
        console.log("user", req.user);
        res.json('/home')
        }
    );

};
