function addTogether() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (!Number.isInteger(arguments[i])) {
      return undefined;
    } else {
      if (arguments.length === 1) {
        return function add(x) {
          return addTogether(2, arguments[0]);
        };
      } else {
        total += arguments[i];
      }
    }
  }
  return total;
}