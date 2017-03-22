console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      console.log("CREATE Step 2: A request was made to your server to POST /friends from your factory with the following data: ", newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log("CREATE Step 3: Your server has completed the request (wih a response) and gave you back this data:", returned_data);
        friend = returned_data.data;
        console.log("CREATE Step 4: The data from the server was set to a private variable to store in the factory", friend);
        //run the callback as long as the friendFactory.create
        //is passed a function in the second parameter
        //from the controller
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(editedFriend, callback){ // what parameters do we need?
      $http
        .put('/friends/' + editedFriend._id, { name: editedFriend.name, favoriteLanguage: editedFriend.favoriteLanguage })
        .then(function(returned_data){
          friends = returned_data.data;

          if (typeof(callback) == 'function'){
            callback(friends);
          }
        });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      //Note: this can be shortened to $http.get('/friends').then(callback);
      //But only if you only want to run the callback from the controller.
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };
    this.delete = function(){// what parameters do we need?
        // Your code here
    };
    this.show = function(){// what parameters do we need?
        // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(friendId,callback){
      console.log(friend);
      $http.get('/friends/'+friendId).then(function(returned_data){
        friend = returned_data.data
        callback(friend);
      })
    };
    this.addFriend = function(item){
        friends.push(item);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
