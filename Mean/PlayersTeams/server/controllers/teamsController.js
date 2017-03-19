app.controller('teamsController', ['$scope', function($scope){
  $scope.teams = []
  $scope.addTeam = function(){
    $scope.teams.push($scope.team);
    $scope.team = {}
  }

  $scope.removeTeam = function(teamToDelete){
    $scope.teams = $scope.teams.filter( function(team){
      return team !== teamToDelete;
    })
  }

  // $scope.teams = [
  //   {
  //     name: "Coding"
  //   },
  //   {
  //     name: "Dojo"
  //   },
  //   {
  //     name: "Bellevue"
  //   }
  // ];
}]);
