function LastFew(arr, num){
  var result += [];
  if(num >= 0){
    for(var i = arr.length - num; i < arr.length; i++){
      result.push(arr[i]);
    }
    return result;
  }
}
LastFew([1,2,3,15,18,38], 3);
