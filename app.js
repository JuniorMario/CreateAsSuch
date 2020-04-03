var config = require('./config.json')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const uuid = require('uuid/v4')
const session = require('express-session')
const redis = require('redis');
var db = require("./db/model")
const redisStore = require('connect-redis')(session);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

const { exec } = require('child_process');


console.log('Running migrations... %s', path.join(__dirname, './'))

exec('npm run migrate', {
  env: process.env,
  cwd: path.join(__dirname, './'),
}, (err, stdout, stderr) => {
  if (err) {
    setTimeout(() => {
      console.info('Migrations failed to run...we are trying again...')
      exec('npm run migrate', {
        env: process.env,
        cwd: path.join(__dirname, './'),
      })
    }, 3000);
    
    console.error(err)
  } else {
    console.log('Migrations runned successfully')
  }
})
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new redisStore({ host: 'redis', port: 6379, client: redis.createClient(process.env.REDIS_URL), ttl: 86400 })


app.use(session({
  secret: 'ThisIsHowYouUseRedisSessionStorage',
  name: '_redisPractice',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: sessionStore,
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin-panel', adminRouter);


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
