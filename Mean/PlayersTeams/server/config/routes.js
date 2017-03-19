//  inject the ngRoute dependency in the module.
var app = angular.module('app', ['ngRoute']);
//  use the config method to set up routing:
app.config(function ($routeProvider) {
  $routeProvider
    .when('/players',{
        templateUrl: 'partials/players.html'
    })
    .when('/teams',{
        templateUrl: 'partials/teams.html'
    })
    .when('/associations',{
        templateUrl: 'partials/associations.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
