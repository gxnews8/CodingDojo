const express = require("express");
const path = require("path");
const app = express();
var PORT = 8000
const passport = require('passport');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
require('./server/config/mongoose.js');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "./client/static")));

require('./server/config/auth.js')(app, flash, passport);

require('./server/config/routes.js')(app, flash, passport);

const server = app.listen(PORT, function() {
	console.log(`Server Listening on port ${PORT}`)
});
