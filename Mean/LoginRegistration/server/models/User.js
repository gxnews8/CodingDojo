/*************Creates variables from node_modules -- same as var ____ = require('_____') but in ES6**********/
import mongoose from 'mongoose';
/***************End imports****************/

const UserSchema = new mongoose.Schema({ //creates a constant variable storing the UserSchema model
	firstName: { //user must contain a first name...
		type: String,
		required: [true, 'First Name not provided'], //this field is required, if it is left blank, throw this error
		validate: { //validates first name field based on below regex
			validator: val => {
				return /^[a-zA-Z\-\']{2,}$/.test(val);
			},
			message: 'First Name not proper format' //throws this error if first name does not match regex
		}
	},
	lastName: { //user must contain a last name...
		type: String,
		required: [true, 'Last Name not provided'], //this field is required, if it is left blank, throw this error
		validate: { //validates last name field based on below regex
			validator: val => {
				return /^[a-zA-Z\-\']{2,}$/.test(val);
			},
			message: 'Last Name not proper format' //throws this error if last name does not match regex
		}
	},
	email: { //user must contain an email...
		type: String,
		validate: { //validates email field based on below regex
			validator: val => {
				return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(val);
			},
			message: 'Email not proper format' //throws this error if email does not match regex
		},
		required: [true, 'Email not provided'], //this field is required, if it is left blank, throw this error
		index: {
			unique: true //given index for email field will not be duplicated
		}
	},
	password: { //user must contain a password
		type: String,
		required: [true, 'Password not provided'], //this field is required, if it is left blank, throw this error (last back end check)
	}
}, {
	timestamps: true //require timestamps on all users
});

const User = mongoose.model('User', UserSchema); //attaches the User constant variable to mongoose
