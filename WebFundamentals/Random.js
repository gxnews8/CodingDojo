function Random(num) {
  while (num > 0) {
    var win = ((100* Math.random())<1);
    var coins = (50+ Math.floor(Math.random()*50));
    if(win){
      return num + coins;
    }
  }
  return 0;
}
console.log(Random(80));
