function rot13(str) {
  var rot13Arr = [];
  var regExp = /[A-Z]/;
  str = str.split("");
  
  for (var i in str) {
    if (regExp.test(str[i])) {
      rot13Arr.push((str[i].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rot13Arr.push(str[i].charCodeAt());
    }
  }
  
  str = String.fromCharCode.apply(String, rot13Arr);
  return str;
}