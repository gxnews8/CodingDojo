var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    // faker    = require('faker'),
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'node_modules' )));
app.use( express.static( path.join( root, 'server' )));
app.use(bp.json())

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// var Friend = require('./server/controllers/friends.js');
// for (var i = 0; i < 10000; i ++){
//   Friend.create(faker.helpers.createCard());
// }

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
