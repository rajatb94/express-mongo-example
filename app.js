var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// step 1
//connection
var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/facelook';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//----------------------------------------





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

//**************************************** */

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/admin', usersRouter)  

app.use('/veg', function(req, res){
  res.send('What u want?')
})

app.use('/waitor/ask', function(req, res){
  let dishName = req.query.dishAsked
  res.render('rajat', {dishName: dishName})
})


app.use('/waitor/ask2', function(req, res){
  let dishName = req.query.dishAsked
  res.render('rajat', {dishName: dishName})
})


app.post('/apsum', function(req, res){
  let {a, n ,d} = req.body;
  let result = (n/2)*(2*a + (n-1)*d)
  res.json({
    input_values: {
      a_value: a,
      n_value: n,
      d_value: d,
    },
    ans: result
  })
})

//**************************************** */

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
  res.render('error');
});

module.exports = app;
