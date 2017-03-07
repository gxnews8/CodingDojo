function VehicleConstructor(name, wheels, passengerNumber,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  // String used to generate vin number
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

  this.distanceTraveled = 0;
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  // Invoke createVin to generate random vin number
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

}

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
};

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
};

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distanceTraveled);
  return this;
};

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);
