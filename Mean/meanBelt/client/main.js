var app = angular.module('app', ['ngRoute', 'ngCookies', 'angularMoment']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'IndexController'
    })
    .when('/signup', {
      templateUrl: '/partials/_signup.html',
      controller: 'UserController'
    })
    .when('/signin', {
      templateUrl: '/partials/_signin.html',
      controller: 'UserController'
    })
    .when('/customers', {
      templateUrl: '/partials/_customers.html',
      controller: 'CustomerController'
    })
    .when('/products', {
      templateUrl: '/partials/_products.html',
      controller: 'ProductController'
    })
    .when('/orders', {
      templateUrl: '/partials/_orders.html',
      controller: 'OrderController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
