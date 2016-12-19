var array = [5,3,4,1];
for(var x=0; x<array.length-1; x++){
  for(var y=array.length-1; y>=x; y--){
    if(array[x] > array[y]){
      var temp = array[y];
      array[y] = array[x];
      array[x] = temp;
    }
  }
}
console.log(array);
