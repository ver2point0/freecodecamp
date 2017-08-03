function sumPrimes(number) {
  var sum = 0;
  for (var i = 2; i <= number; i++) {
    var isPrime = true;
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
    sum += i;
    }
  }
  return sum;
}
