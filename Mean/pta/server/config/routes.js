//This is the first javascript file to load, so it initializes the module
var app = angular.module('app', ['ngRoute', 'ngMessages']);
//Define our routes to render partials
app.config(function($routeProvider){
   $routeProvider
      .when("/players", {
         //Because our server.js established the location of the static folder,
         //we don't have to define the location of our partials beyond their
         //relation to the static folder
         templateUrl: "static/partials/players.html"
      })
      .when("/teams", {
         templateUrl: "static/partials/teams.html"
      })
      .when("/associations", {
         templateUrl: "static/partials/associations.html"
      })
      .when('/:teamname',{
        templateUrl: 'static/partials/team.html'
      })
      .otherwise({
         redirectTo: "/players"
      })
})
