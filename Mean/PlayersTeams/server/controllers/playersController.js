app.controller('playersController', ['$scope', function($scope){
  $scope.players = []
  $scope.addPlayer = function(){
    $scope.players.push($scope.player);
    $scope.player = {}
  }

  $scope.removePlayer = function(playerToDelete){
    $scope.players = $scope.players.filter( function(player){
      return player !== playerToDelete;
    })
  }

  // $scope.players = [
  //   {
  //     name: "Charlie"
  //   },
  //   {
  //     name: "Mike"
  //   },
  //   {
  //     name: "Sara"
  //   }
  // ];
}]);
