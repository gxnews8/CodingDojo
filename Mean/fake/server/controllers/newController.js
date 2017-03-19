app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
  $scope.addUser = function(){
    console.log('here?');
    userFactory.create($scope.user, function() {
      console.log('in here?');
      $location.url('/index');
    });
  }
}]);
