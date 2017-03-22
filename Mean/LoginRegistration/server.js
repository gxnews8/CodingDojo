//Standard express setup
var express=require('express'),
app = express(),
path = require('path');
//npm install body-parser --save
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('Server listening on port 8000');
});
