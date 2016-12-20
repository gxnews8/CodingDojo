function NegativeArr(arr){
  var arr = [1,2,3,-4,-5,-6];
  for(var i = 0; i < arr.length; i++){
    //if(arr[i] > 0){
      arr[i] *= -1;
      console.log(arr[i]);
    /*}
    else{
      arr[i] *= -1;
      console.log(arr[i]);
    }*/
  }
}
NegativeArr();
