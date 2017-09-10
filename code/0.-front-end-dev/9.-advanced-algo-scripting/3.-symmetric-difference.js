function symmetricDifference(args) {
  var argumentsArray = Array.prototype.slice.call(arguments);
  
  return argumentsArray
    .reduce(function(previous, next) {
      return checkDiff(previous, next).concat(checkDiff(next, previous));
    })
    .filter(function(element, index, arr) {
      return arr.indexOf(element) === index;
    });
}

function checkDiff(a, b) {
  return a.filter(function(element) {
    return b.indexOf(element) < 0;
  });
}