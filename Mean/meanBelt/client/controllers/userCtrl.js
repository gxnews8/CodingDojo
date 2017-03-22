app.controller('UserController', ['$scope', 'usersFactory', function($scope, uF){

  $scope.signup = function(){

    uF.signup($scope.signup, function(data){
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
  $scope.signin = function(){
    uF.signin(
      $scope.signin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
}]);
