function Hello(hour, minute, period){
  if(hour > 12 || minute > 60 || !period){
    return -1;
  }
  if(minute >= 50){
    var over = "almost";
    hour += 1;
  }
  else if(minute <= 15){
    var over = "just after";
  }
  else{
    var over = "just";
  }
  if(period == "AM"){
    var ampm = "morning";
  }
  else if(period == "PM"){
    var ampm = "evening";
  }
  else{
    ampm = "today";
  }
  if(period == "AM"){
    console.log("It's "+over+" "+hour+period+" in the "+ampm);
  }
  else if(period == "PM"){
    console.log("It's "+over+" "+hour+period+" in the "+ampm);
  }
  else{
    console.console.log("No this time.");
  }
}
Hello(8,50, "AM");
