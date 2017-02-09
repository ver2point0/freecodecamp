function repeatStringNumTimes(str, num) {
  var emptyString = "";
  var newString = [];
  if (num > 0) {
    for(var i = 0; i < num; i++) {
      newString += str;
    }
  } else {
    return emptyString;
  }
  return newString;
}