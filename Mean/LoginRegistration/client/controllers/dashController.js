app.controller('dashController', ['$scope', '$location',
	'userFactory',
	function($scope, $location, userFactory) { //creates dashController and passes these variables
		$scope.user = {}; //creates the user variable and sets to an empty object
		userFactory.checkSesh(data => { //runs the checkSesh method of userFactory (keeps user from bypassing login)
			if (!data) { //if the returned data is undefined or null...
				$location.url('/'); //return the user to the root
			} else { //if the returned data is not null...
				$scope.user = data; //store the user information in $scope.user
			}
		});
	}
]);
