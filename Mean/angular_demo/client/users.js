app.controller('usersController', ['$scope', function($scope){
  $scope.createUser = function(){
    $scope.users.push($scope.user);
  }

  $scope.deleteUser = function(userToDelete){
    $scope.users = $scope.users.filter( function(userObj){
      return userObj !== userToDelete;
    })
  }

  $scope.users = [
    {
      FirstName: "Charlie",
      LastName: "Mead",
      Email: "JavaScript@qq.com",
      Password: "GJHG8768ih9HHK"
    },
    {
      FirstName: "Mike",
      LastName: "Hannon",
      Email: "Python@qq.com",
      Password: "GJHG87fhfgh8ih9HHK"
    },
    {
      FirstName: "Sara",
      LastName: "Wong",
      Email: "Ruby@qq.com",
      Password: "GJdfwewih9HHK"
    }
  ];
}]);
