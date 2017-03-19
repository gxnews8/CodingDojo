/*************Creates variables from node_modules -- same as var ____ = require('_____') but in ES6**********/
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
/***************End imports****************/

const models_path = path.join(__dirname, '../models'); //creates constant (non-changing) variable for the path to the models folder

mongoose.connect('mongodb://localhost/logreg'); //connects the server with the database through mongoose
fs.readdirSync(models_path).forEach(file => { //for every file in the models folder...
	if (file.indexOf('.js') >= 0) { //if the file is a JavaScript file (has a .js extension)...
		require(models_path + '/' + file); //import that file
	}
});
