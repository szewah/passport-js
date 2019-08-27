var path = require('path');
var isAuthenticated = require ('../config/isAuthenticated');


module.exports = function(app) {
  /* GET home page. */
  //If user is logged in than they will reach the home page
  app.get('/home', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/login");
  })

};
