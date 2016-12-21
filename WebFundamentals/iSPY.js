function iPSY(arr) {
  var highest = 0;
  var resolt = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
      resolt.push(highest);
    }
  }
  return resolt;
}
iSPY([-1,3,2,7,5,10]);
