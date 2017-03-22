var app = angular.module('app', ['ngRoute','ngCookies']);

app.factory('usersFactory', ['$http', function($http) {
  var usersFactory = function(){
    this.login = function(data,callback,errback){
      $http.post('/login',data).then(callback,errback);
    }
    this.index = function(callback){
      $http.get('/users').then(callback);
    }
    this.register = function(data,callback,errback){
      $http.post('/register',data).then(callback,errback);
    }

  }
  return new usersFactory;
}]);

app.controller('loginController', ['$scope', 'usersFactory', function($scope, uF){

  $scope.register = function(){

    uF.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }
  $scope.login = function(){
    uF.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
					console.log('I am here.');
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
}]);
