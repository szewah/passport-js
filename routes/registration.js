var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');

/* GET users listing. */
router.get('/registration', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/register.html"))
});

router.post('/api/registration', async(req, res, err) => {
  if (err) throw err;
  console.log(req.body);
  db.Users.create({
    firstName: req.body.registerName,
    lastName: req.body.registerSurname,
    email: req.body.registerEmail,
    password: req.body.egisterPassword
  }).then((results) => {
      res.json(results);
      res.redirect('/');
  }).catch((err) => {
    res.json(err);
  });
})

module.exports = router;
