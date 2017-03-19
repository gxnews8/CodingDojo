app.factory('userFactory', ['$http', function($http) { //creates userFactory and passes parameters
	var users = []; //creates empty array to store users (on index)
	return {
		index: cb => { //retrieves all users from DB
			$http.get('/users').then(response => { //AJAX call to /users route (retrieves all users)
				users = response.data; //set the users to the returned data
				if (typeof(cb) == 'function') { //if the cb parameter as passed is a function...
					cb(response.data); //invoke said function and pass the retrieved information
				}
			}, err => { //if an error is thrown while attempting to retrieve information...
				cb(err);
			});
		},
		create: (user, cb) => { //creates new user
			let errors = [], //creates empty array to store errors
				nameRegex = /^[a-zA-Z\-\']{2,}$/, //regex to test first/last name against
				emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, //regex to test email against
				pwordRegex =
				/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex to test password against
			if (!user || !user.firstName || !user.lastName || !user.email ||
				!user.password || !user.conf) { //if any fields are left blank...
				errors.push('Please fill in all fields'); //push this error to the errors array
			} else { //if all fields are filled in...
				if (!user.firstName.match(nameRegex)) { //if the first name entered does not match regex...
					errors.push('First Name incorrect format'); //push error to errors array
				}
				if (!user.lastName.match(nameRegex)) { //if the last name entered does not match regex...
					errors.push('Last Name incorrect format'); //push error to errors array
				}
				if (!user.email.match(emailRegex)) { //if the email entered does not match regex...
					errors.push('Email incorrect format'); //push error to errors array
				}
				if (!user.password.match(pwordRegex)) { //if the password entered does not match regex...
					errors.push(
						'Password does not meet minimum requirements: Must be at least 8 characters in length and include at least 1 lowercase and 1 uppercase letter, 1 number, and 1 special character' //push error to errors array
					);
				}
				if (user.password != user.conf) { //if the password and confirm password do not match...
					errors.push('Password and Confirm Password must match'); //push error to errors array...
				}
				if (errors.length > 0) { //if there are errors in the errors array...
					if (typeof(cb) == 'function') { //and the cb parameter is a function...
						cb({
							'errorsFront': errors //invoke cb and pass the errors array
						});
					}
				} else { //if there are no errors in the errors array...
					delete user.conf; //delete confirm password from the user object
					$http.post('/users', user).then(response => { //send the user object to the /users route in a post request
						if (typeof(cb) == 'function') { //if the cb parameter is a function...
							cb(response.data); //invoke cb and pass the returned user data (newly created user)
						}
					}, err => { //if an error is thrown while attempting to create user...
						if (typeof(cb) == 'function') { //and the cb parameter is a function...
							cb(err); //invoke cb and pass the error
						}
					}); //$http.post
				} //errors in errors array if/else
			} //fields left blank if/else
			if (typeof(cb) == 'function') { //if some fields were left blank and cb is a function...
				cb({
					'errorsFront': errors //invoke cb and pass the errors array
				});
			}
		},
		getUser: (id, cb) => { //gets a single user from the DB based on given id
			$http.get('/users/' + id).then(response => { //get request with passed id
				if (typeof(cb) == 'function') { //if cb is a function...
					cb(response.data); //invoke cb and pass retrieved information
				}
			}, err => { //if an error is thrown during get request...
				if (typeof(cb) == 'function') { //and cb is a function...
					cb(err); //invoke cb and pass error
				}
			});
		},
		login: (user, cb) => { //logs user in based on entered information
			let errors = []; //creates empty array to store errors
			if (!user || !user.email ||
				!user.password) { //if any fields are left blank...
				errors.push('Please fill in all fields'); //pushes error to errors array
			} else { //if all fields are filled in...
				$http.post('/users/login', user).then(response => { //execute post request passing user object
					if (typeof(cb) == 'function') { //if cb is a function...
						cb(response.data); //invoke cb and pass retrived information (logged in user)
					}
				}, err => { //if an error is thrown during post request...
					cb(err); //invoke cb and pass error
				});
			}
			if (errors.length > 0) { //if the errors array is not empty (fields were left empty)...
				if (typeof(cb) == 'function') { //and cb is a function...
					cb({
						'errorsFront': errors //invoke cb and pass errors array
					});
				}
			}
		},
		checkSesh: cb => { //checks to see if there is a session object
			$http.get('/checksesh').then(response => { //get request to check if session has been created
				if (typeof(cb) == 'function') { //if cb is a function...
					cb(response.data); //invoke cb and pass returned information (may be null/undefined!!)
				}
			}, err => { //if an error is thrown during get request...
				console.log(err);
			});
		}
	};
}]);
