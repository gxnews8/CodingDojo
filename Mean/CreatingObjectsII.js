/* Vehicle Constructor declares an initial variable, vehicle as an object.
  public properties that can be set:
    name, wheels, passengersNumber
  public method:
    makeNoise
  returns vehicle.
*/

function VehicleConstructor(name, wheels, passengerNumber,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  /* Privates */
  var distanceTraveled = 0;
  var self = this;
  function updateDistanceTraveled(){
    distanceTraveled += self.speed;
    console.log(distanceTraveled);
  }
  /* public */
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;

  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  };
  this.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
  };
  this.checkMiles = function(){
    console.log(distanceTraveled);
  };

}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log(car.speed);
