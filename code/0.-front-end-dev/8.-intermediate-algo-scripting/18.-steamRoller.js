function steamrollArray(arr) {
  var finalArray = [];
  breakArr(arr, finalArray);
  return finalArray;
}

function breakArr(arr, flatArray) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      breakArr(arr[i], flatArray);
    }
  }
  return flatArray;
}