var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/registration', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/register.html"))
});

module.exports = router;
