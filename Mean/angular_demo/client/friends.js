app.controller('friendsController', ['$scope', function ($scope){
  // we don't need a factory for this demo, it wouldn't make a difference if we did.
    $scope.friends = [
        {name:'John', age: 25.9, gender:'boy'},
        {name:'Jessie', age: 30.8, gender:'girl'},
        {name:'Johanna', age: 28.1, gender:'girl'},
        {name:'Joy', age: 15.5, gender:'girl'},
        {name:'Mary', age: 28.5, gender:'girl'},
        {name:'Peter', age: 95.1, gender:'boy'},
        {name:'Sebastian', age: 50.5, gender:'boy'},
        {name:'Erika', age: 27.2, gender:'girl'},
        {name:'Patrick', age: 40.3, gender:'boy'},
        {name:'Samantha', age: 60.2, gender:'girl'}
    ];
}])
