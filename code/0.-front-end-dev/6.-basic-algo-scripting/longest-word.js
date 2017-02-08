function findLongestWord(str) {
  var stringArray = str.split(" ");
  var longestWordLength = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWordLength) {
      longestWordLength = stringArray[i].length;
    }
  }
  return longestWordLength;
}