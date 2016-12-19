function Finder(IQ, days){
  if(IQ > 0 &&days > 0){
    var counter = 1;
    while(counter <= days){
      IQ += counter/100;
      counter ++;
    }
    return IQ;
  }
}
Finder();
