/*
  Our factory: This is going to control all of our data.
  Modularize into a folder called: 'factories' within 'client'
*/
app.factory('userFactory', ['$http', function($http) {
  /* Our factory is going to provide the methods to gather user data from a RESTful API
        (we aren't quite there yet, but that's where we are going!)
      Index: return all users
      Show: return one user based on an a unique selector(often id)
      Create: generate a new user
      Update: update a specific user
      Delete: remove a specific user

      Our controller is going to determine what happens once we complete the change in the dataset using a callback function.
      These are denoted below, for clarity as: functionPassedByControllerAsAnArgTo **Method**

      Bonus: convert these callbacks to promises!
  */
  function UserConstructor() {

    var users = [];

    //using this utility function to make type checking more readible
    function typeIs(variable, type) {
      return (typeof variable === type);
    }

    this.index = function(cb) {
      if(!typeIs(cb, 'function')) return;

      $http.get('http://{{instructorhost:port}}/users').then(function(data) {
          users = data.data;
          cb(users);
      });
    };
    /*
      Creates a newUser by pushing the newUser argument into the users array
      then runs the callback to return the updated array to controllers
    */
    this.create = function(newUser, cb) {
      console.log(newUser);
      if(!typeIs(newUser, 'object') || !typeIs(cb, 'function')) return;

      $http.post('http://{{instructorhost:port}}/users', newUser).then(function(data) {
        console.log('here');
          users.push(data.data);
          cb(users);
      });
    };
    /* perhaps a comment here about what this does would help us understand it! */
    this.update = function(fixedUser, _id, cb) {
      // what it does: loops through the users, finds the given user that you want to update by idx, then updates only that user
      $http.put('http://{{instructorhost:port}}/users/' + _id, fixedUser).then(function(data) {
        for (var i = 0; i < users.length; i++) {
          if (users[i]._id === _id) users[i] = fixedUser;
        }
        if (typeIs(cb, 'function')) cb(fixedUser);
      });

    }
    this.show = function(_id, cb) {
      $http.get('http://{{instructorhost:port}}/users/' + _id).then(function(data) {
        if (typeIs(cb, 'function')) cb(data.data);
      });
    }
    this.delete = function(idx, cb) {
      //this will not actually delete from db yet
      if (users[idx]) users.splice(idx, 1);

      if (typeIs(cb, 'function')) cb(users);
    }
  }
  /*
    What is this factory returning?  Could we extend this code to be reused?
  */
  return (new UserConstructor());
}]);
