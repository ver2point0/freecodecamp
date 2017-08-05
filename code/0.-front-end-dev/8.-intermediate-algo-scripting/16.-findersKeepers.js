function findElement(arr, func) {
  /* 
  returns the 1st element in the provided array
  that is evenly divisble by 2
  */
  return arr.filter(func)[0];
}