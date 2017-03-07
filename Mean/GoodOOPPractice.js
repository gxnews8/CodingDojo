function Ninja(name) {
  this.name = name; //createing instance variables
  this.distance_traveled = 0;
}
// createing an instance method
Ninja.prototype.walk = function () {
  console.log(this.name + 'is walking');
  this.distance_traveled += 1;
  return this; //have this method return its own object
};
// another instance method
Ninja.prototype.run = function () {
  console.log(this.name + 'is running');
  this.distance_traveled += 5;
  this.displayDistanceTraceled();
  return this; //have this method return its own object
};
// another instance method
Ninja.prototype.displayDistanceTraceled = function () {
  console.log('distance traveled:', this.distance_traveled);
};
// createing instance/object
var ninja1 = new Ninja('King');
var ninja2 = new Ninja('Michael');
var ninja3 = new Ninja('Adnrew');

ninja1.walk().run().walk().run().run(); //becouse walk/run return itself, we can chain these methods
//you can alse log ninja1 and study it
console.log(ninja1);
