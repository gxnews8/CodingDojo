var app = angular.module('app', ['ngRoute']);
// console.log(app);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html'
  })
  .when('/dash', {
    templateUrl: 'partials/dash.html'
  })
})
