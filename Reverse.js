function Reverse(){
  var arr = [1,2,35,4,5,16,7,8,9,19];
  var temp = [];
  for(var i = 0; i < arr.length; i++){
    temp.push(arr[arr.length - 1 - i]);
  }
  console.log(temp);
}
Reverse();
