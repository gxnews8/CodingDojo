// console.log('hi');
app.controller('sessionController', function($scope, sessionFactory){
  $scope.errors = [];
  $scope.curUser = null;
  sessionFactory.getUser()
  $scope.login = function(){
    if(!$scope.logReg || !$scope.logReg.name){
      // console.log("Nooooooooo");
      $scope.errors.push("Please enter your name.");
    }
    else if($scope.logReg.name.length < 3){
      // console.log("Yesssssssssssss");
      $scope.errors.push("Your name too short.");
    }
  }
})
