function Birthday(days){
  if(days <0 || days > 60){
    return -1;
  }
  if(days <= 60 && days > 57){
    console.log(days + " days until my birthday. Such a long time... :(");
  }
  else if (days <= 57 && days >=3){
    console.log(days + " days until my birthday.");
  }
  else if (days < 3 && days >0){
    console.log(days + " DAYS UNTIL MY BIRTHDAY!!!");
  }
  else  if (days = 0){
    console.log(days + " days until my birthday.");
  }
  else {
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
  }
}
Birthday(0);
