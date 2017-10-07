function pairwise(arr, arg) {
  var indexSum = [];
  
  if (arr.length === 0) {
    return 0;
  }
  
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j] == arg) && 
          indexSum.indexOf(i) == -1 && indexSum.indexOf(j) == -1) {
          indexSum.push(i, j);
      }
    }
  }
  
  var sum = indexSum.reduce(function(x, y) {
    return x + y;
  });
  return sum;
}