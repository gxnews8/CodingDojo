app.controller("TeamsController", function($scope, TeamFactory){
   $scope.teams = [];

   //When this controller is loaded, fetch the team list
   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   //Pass new team info to the TeamFactory
   $scope.addTeam = function(){
      TeamFactory.addTeam($scope.newTeam)
      $scope.newTeam = {}; //Reset newTeam form
   }

   //Pass $index to TeamFactory to remove
   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
   }
})
app.controller('teamController', function(teamsFactory, $routeParams){
 console.log($routeParams)
 $routeParams.players = [];
 teamsFactory.getPlayers(function(players){
    $routeParams.players = players;
 })
})
