// JS Fundamentals Part I
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}
x.push(100);
console.log(x);
var newArray = ["hello", "world", "JavaScript is Fun"];
for (var i = 0; i < newArray.length; i++) {
  x.push(newArray[i]);
}
console.log(x);
var sums = 0;
for (var i = 0; i < 500; i++) {
  sums += i;
  console.log(sums);
}
console.log(sums);
var array = [1, 5, 90, 25, -3, 0];
var minimum;
var max = 0;
var average;
var sums = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    minimum = array[i];
  }
  if (array[i] > max) {
    max = array[i];
  }
  sums += array[i];
  average = sums/array.length;
}
console.log(minimum);
console.log(max);
console.log(sums);
console.log(average);
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in newNinja) {
  if (newNinja.hasOwnProperty(key)) {
    console.log(key +":"+newNinja[key]);
  }
}
