// String
// console.log("I like Mean");

// Number
// console.log(50);

// Array
// var empty_array = [];
// var string_array = ["Hi", "these", "are", "string"];
// var x = 15;
// console.log("Logging variables to the console", empty_array, string_array, x);
// console.log("2nd value of string_array", string_array[1]);
// console.log("string_array has a length of", string_array.length);
// string_array.push("awesome");
// console.log(string_array);
// string_array.pop();
// console.log(string_array);

// Function
// var firstParameter = 5;
// var secondParameter = 14;
// function myFunctionName(firstParameter, secondParameter) {
//   var myProduct = firstParameter * secondParameter;
//   return myProduct;
// }
// var theProductOffiveAndFourteen = myFunctionName(5,14);
// console.log(theProductOffiveAndFourteen);

// Conditionals
// var x = 15;
// if (x < 10 ) {
//   console.log("x is less than 10");
// } else if (x < 20 ) {
//   console.log("x is less than 20");
// }else{
//   console.log("x is greater than 20!");
// }
// (condition) ? console.log(true) : console.log(false);;

// Loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// var array = [4,1,6,9,44];
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// var ninja = {
//   name:'Susanna',
//   Mean_belt:10,
//   IOS_belt:10,
//   pythos_belt:10,
//   php_belt:9,
//   ruby_belt:9.75
// }
// for (var key in ninja) {
//   if (ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(ninja[key]);
//     console.log(key +":"+ ninja[key]);
//   }
// }

// Objects
// var array = [ fuction(){console.log('hello there');}]
// var object = { helloFunc: function(){console.log('hello there');}}
// var dojo = {};
// dojo = {
//   name: 'Coding Dojo',
//   number_of_students: 25,
//   instructors: ['Andrew', 'Michael', 'Jay'],
//   location: {
//     city: 'San jose',
//     state: 'CA',
//     zipcode: 95112
//   }
// }
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]);
// dojo.number_of_students = 40;
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";
// dojo.phone_number = 1234567890;
// awesome();
// function awesome() {
//   console.log("too good tobe true");
// }
// awesome();
// function addNumbers(a,b) {
//   var sum = a + b;
//   return sum;
  // console.log(sum);
// }
// addNumbers(4, 5)
function addArrayElements(array) {
  var array_sum = 0;
  var array_length = array.length;
  for (var i = 0; i < array.length; i++) {
    addNumbers(array_sum, array[i])
  }
  function addNumbers(a,b) {
    var sum = a + b;
    return sum;
  }
  return array_sum;
}
var new_sum = addArrayElements([3,4,5]);
console.log(new_sum);
