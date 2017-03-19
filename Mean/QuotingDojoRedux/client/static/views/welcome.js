var Discussion = angular.module("discussionsApp", ["ngRoute"]);
var sess;

Discussion.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			title: "Home"
		})
		.when("/discussions/category/:category", {
			templateUrl: "partials/category.html",
			title: "Discussions",
			controller: "categoryController"
		})
		.when("/discussions/category/:category/:id", {
			templateUrl: "partials/specific_discussion.html",
			title: "Discussions",
			controller: "specificController"
		})
		.when("/create_discussion", {
			templateUrl: "partials/new_topic.html",
			title: "Discussions",
			controller: "new_topicController"
		})	
		.when("/categories", {
			templateUrl: "partials/look_categories.html",
			title: "Find By Categories",
			controller: "new_topicController"
		})
		.when("/profile/:id", {
			templateUrl: "partials/profile.html",
			title: "User Profile",
			controller: "profileController"
		})
		.when("/popular_discussions", {
			templateUrl: "partials/popular_discussions.html",
			title: "Popular Discussions",
			controller: "popularController"
		})
		.when("/search_discussions", {
			templateUrl: "partials/search_discussions.html",
			title: "Search Discussions",
			controller: "searchController"
		})
});

Discussion.factory("sessionsFactory", function($http, $location, $window){
	
	var currentUser;

	var factory = {};

	factory.sign_up = function(user, callback){
		$http.post("/users/create", user)
			.success(function(user){
				$window.location.reload();
			}).error(function(error){
				callback(error);
			});
	}
	

	factory.login = function(user, callback){
		$http.post("/users/login", user)
			.success(function(user){
				$window.location.reload();
			}).error(function(error){
				callback(error);
			});
	}

	factory.getCurrent = function(callback){
		$http.get("/users/current").success(function(user){
			callback(user);
		});
	}

	factory.logout = function(current){
		$http.post("/users/logout", current)
			.success(function(user){
				$window.location.reload();
			}
		);
	}

	factory.askedByUser = function(current){
		console.log(current);
		$http.get("/users/user-discussions", current).success(function(discussions){
			return discussions;
		});
	}

	factory.profileName = function(user, callback){
		$http.get("/users/get/name/"+user).success(function(name){
			callback(name);
		});
	}

	factory.messageCount = function(user, callback){
		$http.get("/users/count/messages/"+user).success(function(number){
			callback(number);
		});
	}

	factory.discussionCount = function(user, callback){
		$http.get("/users/count/discussions/"+user).success(function(number){
			callback(number);
		});
	}

	factory.featuredDiscussions = function(callback){
		$http.get("/discussions/home/featured").success(function(results){
			callback(results);
		});
	}
	
	factory.newDiscussions = function(callback){
			$http.get("/discussions/home/new").success(function(results){
				callback(results);
			});
		}

	return factory;
});

Discussion.controller("profileController", function(sessionsFactory, discussionsFactory, $routeParams, $scope, $location){

	var user_id = $routeParams.id;

	sessionsFactory.profileName(user_id, function(user){
		$scope.name = user.name;
		console.log($scope.name);
	});

	sessionsFactory.discussionCount(user_id, function(number){
		$scope.discussionCount = number.number;
		console.log($scope.discussionCount);
	});

	sessionsFactory.messageCount(user_id, function(number){
		$scope.messageCount = number.number;
		console.log($scope.messageCount);
	});
	
});

Discussion.controller("userController", function(sessionsFactory, discussionsFactory, $scope, $location, $window){

	$scope.currentUser = null;

	sessionsFactory.getCurrent(function(user){
		if(user.name){
			$scope.currentUser = user;
			console.log($scope.currentUser);
		}
	});

	$scope.user_login = function(){
		$scope.login_errors = [];
		if ($scope.user) {
			if ($scope.user.username && $scope.user.password){
				sessionsFactory.login($scope.user, function(error){
					if(error){
						$scope.login_errors.push("Your Username and Password combination is incorrect. Please try again.");
					}
				});
			} else {
				$scope.login_errors.push("Please fill in all of the form's fields to login.");
			}
		} else {
			$scope.login_errors.push("Please fill in all of the form's fields to login.");
		}
		
	}

	$scope.user_signup = function(){
		$scope.signup_errors = [];
		if ($scope.new_user) {
			if ($scope.new_user.name &&
				$scope.new_user.username &&
				$scope.new_user.password &&
				$scope.new_user.confirm_password){
				if($scope.new_user.password === $scope.new_user.confirm_password){
					if ($scope.new_user.password.length > 5) {
						sessionsFactory.sign_up($scope.new_user, function(error){
							if(error){
								$scope.signup_errors.push("That Username is already taken. Please select a new Username.");
							}						
						});
					} else {
						$scope.new_user.password = null;
						$scope.new_user.confirm_password = null;
						$scope.signup_errors.push("Make sure your password is at least 6 characters long.");
					}
				} else {
					$scope.new_user.password = null;
					$scope.new_user.confirm_password = null;
					$scope.signup_errors.push("Make sure that your password and confirmation password are the same.");
				}
			} else {
				$scope.signup_errors.push("Please fill in all of the form's fields to signup.");
			}
		} else {
			$scope.signup_errors.push("Please fill in all of the form's fields to signup.");
		}
		
	}

	$scope.logout = function(){
		sessionsFactory.logout($scope.currentUser,
			function(error){
				alert(error);
			}
		);
	}

	sessionsFactory.featuredDiscussions(function(discussions){
		$scope.feat_discussions = discussions;
	});

	sessionsFactory.newDiscussions(function(discussions){
		$scope.new_discussions = discussions;
	});

});

