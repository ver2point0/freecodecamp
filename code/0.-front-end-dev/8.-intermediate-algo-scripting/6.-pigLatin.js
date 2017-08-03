function translatePigLatin(string) {
  var latinPig = "";
  var isVowel = /[aeiou]/gi;
  if (string[0].match(isVowel)) {
    latinPig = string + "way";
  } else {
    var vowelIndice = string.indexOf(string.match(isVowel)[0]);
    latinPig = string.substr(vowelIndice) + string.substr(0, vowelIndice) + "ay";
  }
  return latinPig;
}

translatePigLatin("consonant");