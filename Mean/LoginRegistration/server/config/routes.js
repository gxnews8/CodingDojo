/*************Creates variables from node_modules -- same as var ____ = require('_____') but in ES6**********/
import users from '../controllers/userController'; //imports server controller file to use it's methods
/****************End Imports***************/

module.exports = app => { //exports a function that takes in the app variable (from server.js)
	app.use((req, res, next) => { //sets up the headers for express server routes (CORS and route methods)
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
		res.setHeader('Access-Control-Allow-Methods',
			'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		next();
	});

	app.get('/users', users.index); //get all users
	app.post('/users', users.create); //creates a user
	app.get('/users/:id', users.show); //gets a specific user based on id
	app.post('/users/login', users.login); //runs the login method with entered information
	app.get('/checksesh', users.checkSesh); //checks to see if session exists (is user logged in?)
	app.get('/logout', users.logout); //logs user out
};
