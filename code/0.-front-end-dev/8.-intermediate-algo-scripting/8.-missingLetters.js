function fearNotLetter(stringRange) {
  for (var i = 0; i < stringRange.length; i++) {
    var characterValue = stringRange.charCodeAt(i);
    if (characterValue !== stringRange.charCodeAt(0) + i) {
      return String.fromCharCode(characterValue - 1);
    }
  }
  return undefined;
}