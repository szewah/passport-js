var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');

/* GET users listing. */
router.get('/registration', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/register.html"))
});

router.post('/api/registration', async (req, res, err) => {
  if (err) {console.log("error occurred")};
  console.log(req.body);
  db.User.create({
    firstname: req.body.registerName,
    lastName: req.body.registerSurname,
    email: req.body.registerEmail,
    password: req.body.registerPassword
  }).then((results) => {
      console.log("These are the results: " + results + " after being inserted to the database");
      res.redirect('/');
  }).catch((err) => {
    res.json(err);
    console.log("Another error occured");
  });
})

module.exports = router;
