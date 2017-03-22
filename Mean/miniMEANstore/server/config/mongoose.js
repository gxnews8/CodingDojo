var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    reg = new RegExp( ".js$", "i" ),
    models_path = path.join( __dirname, "../models");

mongoose.Promise = global.Promise;

// connect
mongoose.connect( 'mongodb://localhost/miniMEANstore' );
// load any models

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
