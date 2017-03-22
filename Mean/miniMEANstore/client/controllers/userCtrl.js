App.controller('UserController', function($scope, StoreFactory, $routeParams, $location){
  $scope.users = [];
  fetchUsers();
  $scope.cur_user = null;

  function fetchUsers(){
    StoreFactory.getUsers()
    .then( function(data){
      $scope.users = data;
    });
  }

  $scope.signUp = function(){
    StoreFactory.signUp($scope.newUser)
    .then( function(){
      $scope.newUser = {};
    })
    .then( fetchUsers )
  }

  $scope.signIn = function(){
    // StoreFactory.signIn($scope.user,function(user){
    //   if(user){
        // console.log(user.data);
        // $scope.cur_user = user;
        $location.url('/dashboard')
    //   }
    // })
  }

  $scope.deleteUser = function(id){
    StoreFactory.deleteUser(id)
    .then( fetchUsers )
  }

  $scope.getCurUser = function(){
    sessionFactory.getCurUser(function(data){
      $scope.cur_user = data;
      if(!$scope.cur_user){
        $location.url('/dashboard')
      }
    })
  }


  $scope.login = function(){
    sessionFactory.login($scope.newUser)
  }

})
