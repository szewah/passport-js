var path = require('path');
var db = require('../models');


module.exports = function(app) {
/* GET registration page */
  app.get('/registration', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/register.html"))
  });

  app.post('/api/registration', async (req, res, err) => {
    if (err) {console.log("An error occurred")};
    db.User.create({
      firstname: req.body.registerName,
      lastName: req.body.registerSurname,
      email: req.body.registerEmail,
      password: req.body.registerPassword
    }).then(() => {
      console.log("YES IT WAS CREATED");
        res.redirect('/login');
    }).catch((err) => {
      res.json(err);
    });
  })
};
