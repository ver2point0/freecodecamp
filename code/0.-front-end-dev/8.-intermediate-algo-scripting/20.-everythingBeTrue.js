function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    var property = collection[i].hasOwnProperty(pre);
    if (!property || !collection[i][pre]) {
      return false;
    }
  }
  return true;
}