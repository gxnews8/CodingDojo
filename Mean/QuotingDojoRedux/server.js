var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    // mongoose = require('mongoose'),
    path = require('path'),
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Point server to views
app.set('views', path.join(__dirname, './client/static/views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

require('./server/config/port.js');
require('./server/config/passport.js');
require('./server/config/mongoose.js');
require('./server/config/authFacebook.js')(app, passport);
require('./server/config/authTwitter.js')(app, passport);
require('./server/config/authGithub.js')(app, passport);
require('./server/config/routes.js')(app, passport);

app.listen(port, function(){
  console.log(`Server Listening port on ${port}`);
});
