var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var redis   = require("redis");
var session = require("express-session");
var redisStore = require('connect-redis')(session);
var multer = require('multer');
var moment = require('moment')
var client  = redis.createClient();
var app = express();
var conf = require('./conf.js');
var port = conf.port;
var newfilename = '';


app.set('views', __dirname);

app.engine('html', require('ejs').renderFile);


app.use("assets", express.static(__dirname + '/assets'));
// app.use('/partials', express.static(__dirname + '/views/partials'))
//app.use('/visitor', express.static(__dirname + '/views/visitor'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(session({
    secret: 'caef129da82034ba0893',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 3600}),
    saveUninitialized: false,
    resave: false
}));


var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, conf.imgdest);
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    newfilename = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
  }
});

var upload = multer({storage: storage},{limits : {fieldSize : 10}}).single('file');

/* Front end page management */
app.get('/', function (req, res) {
  res.render('index.html');
});


/** API path that will upload images */
app.post('/upload', function(req, res) {
  upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    else{
      newfilename = conf.imgurl+newfilename;
      console.log(newfilename)
      res.send({error_code:0,err_desc:null,newfilename:newfilename});
    }
  });
});

// all API calls
// app.use('/api',require('./routes'));

// Middleware to redirect
// app.use(function(req,res){
//   res.render('404.html')
// })

app.listen(port, function () {
  console.log('App listening on port '+ port);
});
