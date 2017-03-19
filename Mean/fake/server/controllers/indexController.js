app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
  /* Private Methods */
  console.log('here again');
  var usersIndex = function() {
    userFactory.index(function (factoryUsers) {
      console.log(factoryUsers);
      $scope.users = factoryUsers;
    } /* end args passed to userFactor index */ ); //end userFactory method invokation
  } //end usersIndex

  /* Scope Methods */
  $scope.show = function(_id) {
    $location.url('/edit/' + _id);
  }
    /* on load time */
  console.log("loading the controller");
  console.log(userFactory);
  console.log(this);
  usersIndex();
}]);
