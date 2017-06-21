var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var mock = require('./routes/mock');
var hour = require('./routes/hour');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/userList', function(req,res,next){
  var sellers=`
        [{
                    "shopName":"一号店1",
                    "isNewRecord":false
                },{
                    "shopName":"淘宝2",
                    "isNewRecord":false

                },{
                    "shopName":"1223",
                    "isNewRecord":false

                },{
                    "shopName":"2224",
                    "isNewRecord":false

                },{
                    "shopName":"赶集网5",
                    "isNewRecord":false

                },{
                    "shopName":"9876",
                    "isNewRecord":false

                },{
                    "shopName":"LVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV7",
                    "isNewRecord":false

                },{
                    "shopName":"GV8",
                    "isNewRecord":false

                },{
                    "shopName":"GV9",
                    "isNewRecord":false

                }]
        `
        res.write(sellers);
        res.end();
});
app.use('/index', index);
app.use('/mock', mock);
app.use('/hour', hour);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
