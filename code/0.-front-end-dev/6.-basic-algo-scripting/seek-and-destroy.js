function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(el) {
    return args.indexOf(el) === -1;
  });
}