var createError = require('http-errors');
var config = require('./config.json')
const express = require('express');
//const sessionLoader = require('./session')
const authService = require('./services/auth.service')
const path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const uuid = require('uuid/v4')
const session = require('express-session')
const redis = require('redis');
const livereload  = require("connect-livereload");
var db = require("./db/model")
const client = redis.createClient();
const redisStore = require('connect-redis')(session);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  secret: 'ThisIsHowYouUseRedisSessionStorage',
  name: '_redisPractice',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
  store: new redisStore({ host: 'localhost', port: 6379, client: client, ttl: 86400 }),
}));


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
