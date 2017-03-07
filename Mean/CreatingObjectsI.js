var http = require('http');
server = http.createServer(function (req, res) {
res.writeHeader(200, {"Content-Type": "text/plain"});
res.end("Hello World\n");
});
server.listen(8000);
console.log("httpd start @8000");

function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};
/*
  Properties
*/
  vehicle.name = name || "unicycle";
  vehicle.wheels = wheels || 1;
  vehicle.passengerNumber = passengerNumber || 0;
  /*
    methods
  */
  vehicle.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
  /*
  return
  */
  return vehicle;
}

var unicycle = VehicleConstructor();

var bike = VehicleConstructor("bicycle", 2, 0);
bike.makeNoise = function(){
  console.log('ring, ring');
}
// or simply: bike.makenoise("ring, ring");
var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
  console.log('Honk Honk');
}

var bus = VehicleConstructor('bus',6, 0);
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickupPassengers(6);
console.log(bus.passengerNumber);
