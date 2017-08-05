function smallestCommons(arr) {
  
  arr.sort(function(a, b) {
    return b - a;
  });
  
  var numRange = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    numRange.push(i);
  }
  
  var leastCommonMultipe = numRange[0];
  
  for (var j = 1; j < numRange.length; j++) {
    var gcd = greatestCommonDemoninator(leastCommonMultipe, numRange[j]);
    leastCommonMultipe = ((leastCommonMultipe / gcd ) * numRange[j]);
  }
  return leastCommonMultipe;
  
  function greatestCommonDemoninator(a, b) {
    if (b === 0) {
      return a;
    }
    return greatestCommonDemoninator(b, a % b);
  }
}