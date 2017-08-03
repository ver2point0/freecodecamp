function sumFibs(num) {
  var count = 2;
  var result = 2;
  var nextNumber = 0;
  var fibArray = [1, 1, 2];
  while (num > nextNumber) {
    nextNumber = fibArray[count] + fibArray[count - 1];
    fibArray.push(nextNumber);
    count++;
    if (nextNumber % 2 !== 0 && num >= nextNumber) {
      result += nextNumber;
    }
  }
  return result;
}