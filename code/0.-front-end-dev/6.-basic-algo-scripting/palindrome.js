function palindrome(str) {
  var notLetters = /[\W_]/g;
  var newString = str.replace(notLetters, "").toLowerCase();
  var reverseString = newString.split("").reverse().join("");
  return newString === reverseString;
}
