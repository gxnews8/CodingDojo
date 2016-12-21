function shuffle(arr){
  var temp = [];
  for(var i = 0; i < arr.length; i++){
    var x = Math.floor(Math.random() * arr.length);
    temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
    console.log(arr[x]);
  }
  return arr;
}
shuffle([1,"apple",3,"orange",5,"Dojo",7]);
