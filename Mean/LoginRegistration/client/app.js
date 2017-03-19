const app = angular.module('app', ['ngRoute']); //creates a constant variable named app to store the angular module and imports ngRoute

app.config(function($routeProvider) { //routes for angular...
	$routeProvider
		.when('/', { //when root is entered...
			templateUrl: '/static/partials/logReg.html', //load the login and registration partial
			controller: 'logRegController' //set the controller for this partial to logRegController
		})
		.when('/dash/:id', { //when this url is hit...
			templateUrl: '/static/partials/dash.html', //load the dashboard partial
			controller: 'dashController' //set the controller for this partial to dashController
		})
		.otherwise({ //if the entered url is other than these 2 (or the ones in server/config/routes)
			redirectTo: '/' //redirect the user to root
		});
});
