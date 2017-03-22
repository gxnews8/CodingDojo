var app = angular.module('app');

// To hit this controller and partial, try going to 'http://localhost:8000/#/edit/imatest'
// to see $routeParams update with a new _id property

app.controller('editController',
  [
    '$scope',
    '$routeParams', // note that we are using $routeParams because
    // in angular routes we indicated that a string will be sent
    // through the url via the _id property.
    // (From app.js $routeProvider.when('/edit/:_id'...) function)
    function($scope, $routeParams){ //if injected above dont forget to add in as an argument
      console.log('editController loaded');
      console.log("$routeParams currently looks like this:", $routeParams);
    } //close the function being passed into the controller
  ] // close array of injected services + controller function
); //end the controller function invocation: ()
