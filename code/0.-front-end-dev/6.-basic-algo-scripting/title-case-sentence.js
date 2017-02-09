function titleCase(str) {
  var lowCase = str.toLowerCase();
  var lowSplit = lowCase.split(" ");
  var emptyArr = [];
  for (var i in lowSplit) {
    var temp = lowSplit[i];
    temp = temp.charAt(0).toUpperCase() + temp.substring(1);
    emptyArr.push(temp);
  }
  return emptyArr.join(" ");
}
