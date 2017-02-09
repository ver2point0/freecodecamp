function largestOfFour(arr) {
  var largestSubArrEl = [0, 0, 0, 0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestSubArrEl[i]) {
        largestSubArrEl[i] = arr[i][j];
      }
    }
  }
  return largestSubArrEl;
}
