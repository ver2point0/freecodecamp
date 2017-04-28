function whatIsInAName(collection, source) {
  // whatIsInAName take input collection and compares it with source
  var arr = collection.filter(function(object) {
    // use filter and return true values
    for (var i in source) {
      // check values in source and compare with object
      if (source[i] != object[i]) {
        return false;
      }
    }
    return true;
  });
  
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });