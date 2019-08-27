var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');


/* GET sigin page */
router.get('/signin', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/signin.html"))
});

router.post('/api/signin', passport.authenticate("local"), function(req, res) {
    res.json('/members')
})

module.exports = router;
