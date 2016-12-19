var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
if(h >= 8 && m >= 50){
  console.log("It's almost 9 in the morning");
}
else if(h >= 19 && m >= 15){
  console.log("It's just after 7 in the evening");
}
else{
  console.log("The time is not good.");
}
