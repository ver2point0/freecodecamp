function binaryAgent(str) {
  var englishTranslation = [];
  var splitString = str.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    var num = parseInt(splitString[i], 2);
    var char = String.fromCharCode(num);
    englishTranslation += char;
  }
  return englishTranslation;
}