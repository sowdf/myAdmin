var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session');
var trello = require('./routes/trello');
var home = require('./routes/home');
var options = require('./config/session.json');


var app = express();

// view engine setup
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new MySQLStore(options);
app.use(session({
    key: 'myAdmin',
    secret: 'myAdmin',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));

home(app);
trello(app);

app.listen(app.get('port'),function(err){
    console.log('httpSever is running' + app.get('port'));
})


