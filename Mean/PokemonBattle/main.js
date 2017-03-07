var http = require('http');
server = http.createServer(function (req, res) {
res.writeHeader(200, {"Content-Type": "text/plain"});
res.end("Hello World\n");
});
server.listen(8000);
console.log("httpd start @8000");

var game = {
  players: [],
  addPlayer: function(){}
};
function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();
