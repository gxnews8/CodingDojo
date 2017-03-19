/*************Creates variables from node_modules -- same as var ____ = require('_____') but in ES6**********/
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
/***************End imports****************/

const User = mongoose.model('User'); //stores the user model in the constant variable User

module.exports = (() => { //exports an immediately invoked function to whoever imports this file
	return { //return this object upon invocation...
		index: (req, res) => { //gets all users
			User.find({}, (err, data) => { //find all users in the DB
				if (err) { //if there is an error...
					res.json(err); //send the error message back to the user as JSON
				} else { //otherwise...
					res.json(data); //send all of the users back as JSON
				}
			});
		}, //end index()
		create: (req, res) => { //creates a user based on entered registration information
			let pwordReg =
				/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex for password validation
			if (req.body.password.match(pwordReg)) { //if the password meets the min requirements...
				req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(
					8)); //hash the password
				User.findOne({ //attempt to find a user in the DB based on the entered email address
					email: req.body.email
				}, (err, data) => {
					if (err) { //if an error is returned...
						console.log(err);
					} else { //if there is no error...
						if (data) { //and a user is returned (data is not null)...
							res.json({
								'errorsFront': ['User already exists, please log in'] //return this error to the user in the form of JSON
							});
						} else { //if no user is returned (data is null)...
							let user = new User(req.body); //create a new user based on the entered information...
							user.save((err1, data1) => { //save the user to the DB (used err1 and data1 to differentiate from the outer function)
								if (err1) { //if there is an error...
									res.json(err1); //sends this to user (runs validations in model!)
								} else { //if there is no error...
									req.session.user = data1; //create a session variable to store the returned data (new user)
									req.session.save(err2 => { //save session
										if (err2) { //if there's an error upon saving session...
											console.log(err2);
										} //req.session.save if
									});
									res.json(data1); //send the new user information back to client-side
								} //user.save else
							});
						} //if no user is returned if/else
					} //if there is no error on User.findOne if/else
				}); //User.findOne
			} else { //if the password does not meet the min requirements...
				res.json({
					'errorsFront': ['Password does not meet minimum requirements'] //return this message to the client-side (there is also a client-side check, this is more for if they attempt to bypass the system)
				});
			}
		},
		show: (req, res) => { //retrieves a specific user based on id
			User.findOne({ //use entered id to find user
				_id: req.params.id
			}, (err, data) => {
				if (err) { //if an error is thrown while searching...
					res.json(err); //send error to front
				} else { //if there is no error...
					res.json(data); //return user info to client-side
				}
			});
		},
		login: (req, res) => { //logs user in based on entered login information
			User.findOne({ //uses entered email to search for user in DB
				email: req.body.email
			}, (err, data) => {
				if (err) { //if an error is thrown (model validations, etc)...
					res.json(err); //return error to client-side
				} else { //if there is no error...
					if (!data) { //but no user information is retrieved...
						res.json({
							'errorsFront': ["Email or Password incorrect"] //return this error to client-side
						});
					} else { //if user information IS retrieved...
						if (bcrypt.compareSync(req.body.password, data.password)) { //assuming the password entered matches that in the DB for that user...
							req.session.user = data; //store user information in session
							req.session.save(err => { //save session
								if (err) { //if an error is thrown while saving...
									console.log(err);
								}
							});
							res.json(data); //return the user information to client-side
						} else { //if password entered does NOT match that as retrieved from the DB...
							res.json({ //return this error to client-side
								'errorsFront': ["Email or Password incorrect"]
							});
						} //password no matchy else
					} //if user information is retrieved else
				} //if there is no error when searching for user else
			}); //User.findOne
		},
		checkSesh: (req, res) => { //returns session to client-side (null if it does not exist)
			res.json(req.session.user);
		},
		logout: (req, res) => { //logs user out
			req.session.destroy(err => { //destroys the current session
				if (err) { //if there is an error thrown while destroying session...
					console.log(err);
				}
				res.redirect('/'); //redirects user to root
			});
		}
	};
})();
