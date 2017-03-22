app.factory('usersFactory', ['$http', function($http) {
  var usersFactory = function(){
    this.signin = function(data,callback,errback){
      $http.post('/signin',data).then(callback,errback);
    }
    this.index = function(callback){
      $http.get('/users').then(callback);
    }
    this.signup = function(data,callback,errback){
      $http.post('/signup',data).then(callback,errback);
    }

  }
  return new usersFactory;
}]);
