var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/signin', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/signin.html"))
});

module.exports = router;
