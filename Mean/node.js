var http = require('http');
server = http.createServer(function (req, res) {
res.writeHeader(200, {"Content-Type": "text/plain"});
res.end("Hello World\n");
});
server.listen(8000);
console.log("httpd start @8000");

function User(name, ssn){
  var social = ssn;
  this.name = name;
  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}

var mike = new User('Mike', 274164398);
console.log(mike.getSSN()); // 274164398

// var Todd = {
//   name: "Todd",
//   sayName: function(){
//     console.log("Todd");
//   }
// }
// Todd.sayName();

// function NewPerson(name) {
//   console.log(this);
//   return{
//     name: name,
//     sayName: function(){
//       console.log(name);
//     }
//   }
// }
//
// var jay = NewPerson("Jay");
// Jay.sayName();
// Sara.sayName();
// function Person(name) {
//   this.name = name;
//   this.sayName = function(){
//     console.log(name);
//   }
// }
//
// var Jimmy = new Person("Jimmy");
// Jimmy.sayName();
