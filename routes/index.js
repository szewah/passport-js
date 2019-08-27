var express = require('express');
var router = express.Router();
var path = require('path');
var isAuthenticated = require ('../config/isAuthenticated');

/* GET home page. */
//If user is logged in than they will reach the home page
router.get('/home', isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"))
});

module.exports = router;
