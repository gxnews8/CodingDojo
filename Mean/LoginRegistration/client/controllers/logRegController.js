app.controller('logRegController', ['$scope', '$location', 'userFactory',
	function($scope, $location, userFactory) { //creates the logRegController with these parameters...
		var first = document.getElementById('first'), //stores the first input on registration
			second = document.getElementById('second'), //stores the first input on login
			pword = document.getElementById('password'), //password input
			conf = document.getElementById('confirm'), //confirm input
			pwordReg =
			/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex to test password against
		first.focus(); //on page load, puts the cursor in the register first name input field
		$scope.checkPword = () => { //allows the password error box to be dynamically rendered and adds a red or green border to the password input based on the password entered matching the given regex
			if (pword.value.match(pwordReg)) {
				pword.style.border = "3px solid green";
			} else {
				pword.style.border = "3px solid red";
			}
		};
		$scope.checkConf = () => { //outlines the confirm password input based on it matching the password input
			if (conf.value == pword.value && conf.value.match(pwordReg)) {
				conf.style.border = "3px solid green";
			} else {
				conf.style.border = "3px solid red";
			}
		};

		$scope.logErrors = []; //creates an empty array to store login errors

		$scope.regErrors = []; //creates an empty array to store registration errors

		$scope.register = () => { //when the user hits the registration button...
			$scope.regErrors = []; //clear out all previous registration errors
			userFactory.create($scope.registerUser, data => { //run the userFactory.create method and pass the entered user information and a callback function
				if (data.errors) { //if the returned data has an errors key...
					for (let key in data.errors) { //for every key in the data.errors...
						$scope.regErrors.push(data.errors[key].message); //push these errors to the regErrors array
					}
					first.focus(); //put the user's cursor back on the first input in registration
				} else if (data.errorsFront) { //if the returned data has the errorsFront key (custom)...
					$scope.regErrors = data.errorsFront; //set regErrors to equal the returned errors...
					first.focus(); //put the user's cursor back on the first input in registration
				} else { //if no errors are returned...
					$location.url('/dash/' + data._id); //send the user to the dashboard with their respective user id
				} //if/else
			}); //userFactory.create
		}; //$scope.register

		$scope.login = () => { //when the user hits the login button...
			$scope.logErrors = []; //clear out all previous login errors
			userFactory.login($scope.loginUser, data => { //run the userFactory.login method and pass the entered user information and a callback function
				if (data.errors) { //if the returned data has an errors key...
					for (let key in data.errors) { //for every key in the data.errors...
						$scope.logErrors.push(data.errors[key].message); //push these errors to the logErrors array
					}
					$scope.loginUser = {}; //clear the login input fields
					second.focus(); //put the user's cursor back on the first input in login
				} else if (data.errorsFront) { //if the returned data has the errorsFront key (custom)...
					$scope.logErrors = data.errorsFront; //set logErrors to equal the returned errors...
					second.focus(); //put the user's cursor back on the first input in login
				} else { //if no errors are returned...
					$location.url('/dash/' + data._id); //send the user to the dashboard with their respective user id
				} //if/else
			}); //userFactory.login
		}; //$scope.login
	} //logRegController function
]);
