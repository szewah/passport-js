var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = process.env.PORT || 3000;
var passport = require('./config/passport');
var session = require('express-session');
var flash = require('connect-flash');


//initiate express
var app = express();

//add middlewear
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

//passport
app.use(flash());
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/index')(app);
require('./routes/registration')(app);
require('./routes/login')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("Magic is happening at http://localhost:"+ PORT);
})