function MergeArrs(){
  var arr1 = [1,2,3];
  var arr2 = [4,5,6];
  var arr3 = [];
  for(var i = 0; i < arr1.length; i++){
    arr3.push(arr1[i]);
  }
  for(var i = 0; i < arr2.length; i++){
    arr3.push(arr2[i]);
  }
  console.log(arr3);
}
MergeArrs();
