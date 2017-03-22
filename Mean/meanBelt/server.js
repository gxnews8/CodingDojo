//Standard express setup
var express=require('express'),
app = express(),
port = 8000,
path = require('path');
//npm install body-parser --save
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules')));

// Just a bit of middleware to print every route request to the console...
app.use( function(req, res, next){
  console.log(req.method, req.url);
  next();
});

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
  console.log(`Server listening port on ${port}`);
});
