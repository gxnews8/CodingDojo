app.controller('associationsController', ['$scope', function($scope){
  $scope.associations = []
  $scope.addAssociation = function(){
    $scope.associations.push($scope.association);
    $scope.association = {}
  }

  $scope.removeAssociation = function(associationToDelete){
    $scope.associations = $scope.associations.filter( function(association){
      return association !== associationToDelete;
    })
  }

  // $scope.associations = [
  //   {
  //     name: "Charlie",
  //     team: "Coding"
  //   },
  //   {
  //     name: "Mike",
  //     team: "Dojo"
  //   },
  //   {
  //     name: "Sara",
  //     team: "Bellevue"
  //   }
  // ];
}]);
