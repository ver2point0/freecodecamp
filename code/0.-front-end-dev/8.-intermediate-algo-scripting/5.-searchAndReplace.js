function myReplace(sourceString, wordToReplace, wordReplacement) {
  if (wordToReplace[0] === wordToReplace[0].toUpperCase()) {
    wordReplacement = wordReplacement[0].toUpperCase() + wordReplacement.slice(1);
  }
  
  return sourceString.replace(wordToReplace, wordReplacement);
}