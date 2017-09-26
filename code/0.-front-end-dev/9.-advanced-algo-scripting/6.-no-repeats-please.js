var result = [];

function permAlone(str) {
  result = [];
  var splitStr = str.split("");
  getResult(splitStr, []);
  return result.length;
}

function getResult(openArray, res) {
  if (openArray.length === 0) {
    result.push(res);
    return;
  }
  
  for (var i = 0; i < openArray.length; i++) {
    var x = openArray[i];
    if (x != res[res.length - 1]) {
      var resTemp = res.slice(0);
      resTemp.push(x);
      var openArrayTemp = openArray.slice(0);
      openArrayTemp.splice(i, 1);
      getResult(openArrayTemp, resTemp);
    }
  }
}
