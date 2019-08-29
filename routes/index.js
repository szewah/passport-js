var path = require('path');
var isAuthenticated = require ('../config/isAuthenticated');


module.exports = function(app) {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.redirect('/home');
  })
  //If user is logged in than they will reach the home page
  app.get('/home', isAuthenticated, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
  });

  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    return res.redirect("/login");
  })

};
