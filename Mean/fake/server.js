var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    faker = require('faker'),
    app      = express();

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'node_modules' )));
app.use( express.static( path.join( root, 'server' )));
/* The code below is set to run when the server loads and generate some fake data */

var User = require('./server/controllers/users.js');
for (var i = 0; i < 10000; i ++){
  User.create(faker.helpers.createCard());
}

app.listen(port, function() {
  console.log(`server running on port ${ port }`);
});
