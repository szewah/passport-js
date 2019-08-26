var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = process.env.PORT || 8080;
var passport = require('./config/passport');
var session = require('express-session');

//import routers
var indexRouter = require('./routes/index');
var registrationRouter = require('./routes/registration');
var signinRouter = require('./routes/signin');

//initiate express
var app = express();

//add middlewear
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


//passport
app.use(session({secret: "guineapigs"}));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(indexRouter);
app.use(registrationRouter );
app.use(signinRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("Magic is happening at http://localhost:"+ PORT);
})