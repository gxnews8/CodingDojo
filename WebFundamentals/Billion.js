function Billion(day) {
  var salary = 0.01;
  day = 1;
  for (var i = 1; i <= 30; i++) {
    salary = salary + 1;
    console.log(salary);
    day++;
  }
}
Billion(10);
