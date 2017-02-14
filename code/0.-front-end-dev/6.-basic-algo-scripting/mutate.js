function mutation(arr) {
  var elOne = arr[0].toLowerCase();
  var elTwo = arr[1].toLowerCase();
  for (var i = 0; i < elTwo.length; i++) {
    if (elOne.indexOf(elTwo[i]) < 0)
      return false;
  }
  return true;
}