function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}