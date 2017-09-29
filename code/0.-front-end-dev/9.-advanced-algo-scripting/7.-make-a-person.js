var Person = function(firstAndLast) {
  var first = "";
  var last = "";
  
  this.getFirstName = function() {
    return first;
  };
  
  this.getLastName = function() {
    return last;
  };
  
  this.getFullName = function() {
    return this.getFirstName().concat(" ", this.getLastName());
  };
  
  this.setFirstName = function(f) {
    first = f;
  };
  
  this.setLastName = function(l) {
    last = l;
  };
  
  this.setFullName = function(firstAndLast) {
    var splitFirstLast = firstAndLast.split(" ");
    first = splitFirstLast[0];
    last = splitFirstLast[1];
  };
  
  this.setFullName(firstAndLast);
};