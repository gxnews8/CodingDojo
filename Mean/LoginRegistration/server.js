/*************Creates variables from node_modules -- same as var ____ = require('_____') but in ES6**********/
import express from 'express';
import path from 'path';
import bp from 'body-parser';
import session from 'express-session';
/***************End imports****************/

const app = express(), //creates app variable to store the object returned by express when invoked
	port = 8000; //variable for the port

app.use(bp.json()); //sets body-parser to return json (effectively sets up api)
app.use(express.static(path.join(__dirname, './client'))); //creates a static path to client
app.use(express.static(path.join(__dirname, './client/bower_components'))); //creates a static path for bower_components
app.use(session({ //configuration for session
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}));

require('./server/config/mongoose'); //imports mongoose.js
require('./server/config/routes')(app); //imports (and invokes) routes.js AFTER importing mongoose and passes it the app variable

app.listen(port, () => { //sets up server to listen on port 8000 (or whatever is stored in port variable) and console logs the port value
	console.log('------------------');
	console.log(`-------${port}-------`);
	console.log('------------------');
});
