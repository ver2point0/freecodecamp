/*
  string = "hello"
  string.split(""); ["h", "e", "l", "l", "o"]
  string.reverse(""); ["o", "l", "l", "e", "h"]
  string.join(""); "olleh"
  
  function reverseString(string) {
    var emptyString = "";
    for(var i = string.length - 1; i >= 0; i--) {
      emptyString += string[i];
    }
    return emptyString;
  }
*/
function reverseString(string) {
  return string.split("").reverse().join("");
}
