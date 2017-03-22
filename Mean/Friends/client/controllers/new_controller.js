var app = angular.module('app');

app.controller('newController',
  [
    '$scope',
    function($scope){
      //when your index.html page loads, you should see this line. Otherwise
      //make sure your controller syntax is correct
      //and that you have included the controller script file
      console.log('newController loaded');
      var self = this;

      // This line is optional, because angular will be smart enough
      // to know you have a NC.newFriend object from your ng-model.
      self.newFriend = {};
      // Using the ng-model on the view, angular will determine that
      // two properties will need to be added to this object: name and favoriteLanguage

      // Define a create function so that if someone clicks on
      // an element with ng-click="NC.create()"
      // it triggers the function and runs the code inside
      self.create = function(){
        console.log('Create Friend clicked!');
        //if the required fields are not submitted, then don't proceed
        if (!self.newFriend.name || !self.newFriend.favoriteLanguage) {
          console.log('required fields not present');
          return;
        }

        console.log('All required fields present, and the self.newFriend on the controller (which is also NC.newFriend on the partial) looks like this:');
        console.log(self.newFriend);
        console.log("I haven't sent this information to the server yet.");
      }
    } //close the function being passed into the controller
  ] // close array of injected services + controller function
); //end the controller function invocation: ()
