function convertToRoman(num) {
  var value = "";
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValue = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  
  for (var i = 0; i <= decimalValue.length; i++) {
    while (num % decimalValue[i] < num) {
      value += romanValue[i];
      num -= decimalValue[i];
    }
  }
  return value;
}