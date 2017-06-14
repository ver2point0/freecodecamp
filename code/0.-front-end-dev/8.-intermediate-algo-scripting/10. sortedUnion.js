function uniteUnique(arr1, arr2, arr3) {
  var newArray = [];
  
  for (var i = 0; i < arguments.length; i++) {
    var arrayArgs = arguments[i];
    
    for (var j = 0; j < arrayArgs.length; j++) {
      var index = arrayArgs[j];
      
      if (newArray.indexOf(index) < 0) {
        newArray.push(index);
      }
    }
  }
  return newArray;
}