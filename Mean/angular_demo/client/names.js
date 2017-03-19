app.controller('nameController', ['$scope', function($scope){
  this.names = []
  this.addName = function(){
    this.names.push(this.name)
    this.name = ""
  }
}])
