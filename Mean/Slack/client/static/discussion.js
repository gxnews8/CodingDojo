Discussion.factory("discussionsFactory", function($http, $location, $routeParams){
	var factory = {};

	factory.createTopic = function(discussion, seeError){
		$http.post("/discussions/create", discussion).success(function(result){
			$location.path('/discussions/category/'+result.category+'/'+result._id);
		});
	}

	factory.get_category = function(category, callback){
		$http.get("/discussions/category/" + category).success(function(result){
			callback(result);
		}); 
	}
	factory.get_discussion = function(discussion, callback){
		$http.get("/discussions/" + discussion).success(function(result){
			callback(result);
		});
	}
	factory.add_message = function(message, callback){
		$http.post("/discussions/add_message", message).success(function(result){
			callback(result);
		});
	}
	factory.discussion_user = function(User, callback){
		$http.get("/discussions/discussion/" + User).success(function(result){
			callback(result);
		});
	}
	factory.search_discussions = function(search, callback){
		$http.get("/discussions/search/" + search).success(function(result){
			callback(result);
		});
	}
	factory.populateDiscussion = function(Discussion, callback){
		$http.get("/discussions/populate/" + Discussion).success(function(result){
			callback(result);
		});
	}

	return factory;
});

Discussion.controller("new_topicController", function(sessionsFactory, discussionsFactory, $scope, $location){

	$scope.errors = [];
	$scope.currentUser = null;

	sessionsFactory.getCurrent(function(user){
		if(user.name){
			$scope.currentUser = user;
			console.log($scope.currentUser);
		}
	});

	$scope.createTopic = function(user){
		$scope.errors = [];
		console.log($scope.discussion);
		if($scope.currentUser){
			if($scope.discussion){
					if($scope.discussion.title && $scope.discussion.description && $scope.discussion.category){
					if($scope.discussion._user){
						$scope.discussion._user = "56bf02002d439178480dfcc4";
					} else {
						$scope.discussion._user = user;
					}
					console.log($scope.discussion);
					discussionsFactory.createTopic($scope.discussion,
						function(error){
							alert(error);
							$scope.discussion = {};
						}
					);
				} else {
					$scope.errors.push("Please fill in all of the form's fields to create a discussion.");
				}
			} else {
				$scope.errors.push("Please fill in all of the form's fields to create a discussion.");
			}
		} else {
			$scope.errors.push("You must login before you can create a new discussion.");
		}
	}
});

Discussion.controller("categoryController", function(sessionsFactory, discussionsFactory, $routeParams, $scope, $location){

	$scope.messages = [];
	$scope.quantity = 4;
	var category = $routeParams.category;
	$scope.category = category.charAt(0).toUpperCase()+category.slice(1);

	discussionsFactory.get_category(category, function(Category){
		$scope.categories = Category;
		console.log($scope.categories);
	});

	$scope.viewDiscussion = function(cat){
		$location.path("discussions/category/"+cat.category+"/"+cat._id);
		discussionsFactory.get_discussion(function(Category){
			$scope.specific_category = Category;
		});
	}
});

Discussion.controller("specificController", function(sessionsFactory, discussionsFactory, $routeParams, $scope, $location){

	$scope.messages = [];
	$scope.errors = [];
	$scope.quantity = 4;
	$scope.currentUser;
	var category = $routeParams.category;
	var discussion_id = $routeParams.id;
	console.log(discussion_id);

	sessionsFactory.getCurrent(function(user){
		if(user.name){
			$scope.currentUser = user;
			console.log($scope.currentUser);
		}
	});

	discussionsFactory.get_discussion(discussion_id, function(Discussion){
		$scope.Discussion = Discussion[0];
		if($scope.Discussion._user){
			discussionsFactory.discussion_user($scope.Discussion._user, function(User){
				$scope.user = User.name;
			});
		} else {
			$scope.user = "Anonymous";
		}
	});

	discussionsFactory.populateDiscussion(discussion_id, function(Messages){
		console.log(Messages);
		if(Messages.messages.length > 0){
			$scope.messages = Messages.messages;
			console.log($scope.messages);
		} else {
			$scope.no_messages = "There are currently no messages for this discussion. Add a message to become the first.";
		}
	});

	$scope.addMessage = function(user){
		if($scope.currentUser){
				console.log($scope.message.text.length);
				$scope.message._user = user;
				$scope.message._discussion = discussion_id; 
				console.log($scope.message);
				discussionsFactory.add_message($scope.message,
					function(error){
						alert(error);
						$scope.message = {};
					}
				);
				$scope.messages.push({text: $scope.message.text, _user: {name: $scope.currentUser.name}});
				$scope.message = null;
				$scope.no_messages = null;
		} else {
			$scope.message = {};
			$scope.errors.push("You must log in before you can leave messages in a discussion.");
			console.log($scope.errors);
		}
	}

	$scope.goToProfile = function(user){
		$location.path("#/profile/"+user);
	}

});

Discussion.controller("popularController", function(sessionsFactory, discussionsFactory, $routeParams, $scope, $location){

	discussionsFactory.get_popular(function(Discussions){
		$scope.discussions = Discussions;
	});

});

Discussion.controller("searchController", function(sessionsFactory, discussionsFactory, $routeParams, $scope, $location){


	$scope.search = function(){
		discussionsFactory.search_discussions($scope.Search.text,function(result){
			if(result.length > 0){
				$scope.no_discussions = null;
				$scope.discussions = result;
				console.log($scope.discussions);
			} else {
				$scope.discussions = null;
				$scope.no_discussions = true;
				$scope.currentSearch = $scope.Search.text;
			}
		});
	}

	$scope.viewDiscussion = function(cat){
		$location.path("discussions/category/"+cat.category+"/"+cat._id);
		discussionsFactory.get_discussion(function(Category){
			$scope.specific_category = Category;
		});
	}

});
