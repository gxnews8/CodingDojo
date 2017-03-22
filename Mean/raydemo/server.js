var express = require('express')
, app = express()
, port = 8000
, path = require('path')
, session = require('express-session')
, bp = require('body-parser');

app.use(express.static(path.join(__dirname, '/client')));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(port, function(){
  console.log(`Omg jack is the coolest man on ${port}`);
})
