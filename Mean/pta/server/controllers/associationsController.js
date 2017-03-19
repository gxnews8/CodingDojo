app.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
   $scope.players = [];
   $scope.teams = [];

   //When this controller is loaded, fetch the player list
   PlayerFactory.getPlayers(function(players){
      $scope.players = players;
   })

   //When this controller is loaded, fetch the team list
   TeamFactory.getTeams(function(teams){
      $scope.teams = teams;
   })

   //Pass the player index and team name to create association
   $scope.addPlayerToTeam = function(){
      PlayerFactory.addPlayerToTeam($scope.newAssoc);
   }

   //Pass $index to PlayerFactory to remove the player's team
   $scope.removePlayerFromTeam = function($index){
      PlayerFactory.removePlayerFromTeam($index);
   }
})
