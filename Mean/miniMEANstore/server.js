var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

// Just a bit of middleware to print every route request to the console...
app.use( function(req, res, next){
  console.log(req.method, req.url);
  next();
});
app.use(session({
  secret: 'Do not see my secret.',
  resave: false,
  saveUninitialized: true,
}));
// ROUTES //////////////////////
require('./server/config/routes.js')(app);
///////////////////////////////

// MONGODB //////////////////////
require('./server/config/mongoose.js');
///////////////////////////////

app.listen(port, function(){
  console.log(`Listening on ${port}`);
});
