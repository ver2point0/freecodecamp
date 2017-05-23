function pairElement(str) {
  var dnaMap = { T:"A", A:"T", G:"C", C:"G"};
  var compArray = str.split("");
  for (var i = 0; i < compArray.length; i++) {
    compArray[i] = [compArray[i], dnaMap[compArray[i]]];
  }
  return compArray;
}

pairElement("GCG");