function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}