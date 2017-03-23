App.controller('UserController', function($scope, StoreFactory, $routeParams){
  $scope.users = [];
  fetchUsers();

  function fetchUsers(){
    StoreFactory.getUsers()
    .then( function(data){
      $scope.users = data;
    });
  }

  $scope.createUser = function(){
    StoreFactory.createUser($scope.newUser)
    .then( function(){
      $scope.newUser = {};
    })
    .then( fetchUsers )
  }

  $scope.login = function(user){
    StoreFactory.login(user)
    .then( fetchUsers )
      console.log(fetchUsers);
  }

  $scope.deleteUser = function(id){
    StoreFactory.deleteUser(id)
    .then( fetchUsers )
  }
})
