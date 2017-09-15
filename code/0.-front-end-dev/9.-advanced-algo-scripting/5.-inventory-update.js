function updateInventory(arr1, arr2) {
  var inventory = arr1;
  var newItems = [];
  var isPresent = false;
  
  // go through new items array
  for (var i = 0; i <  arr2.length; i++) {
    isPresent = false;
    // go through inventory
    for (var j = 0; j < inventory.length; j++) {
      if (arr2[i][1] == inventory[j][1]) {
        inventory[j][0] += arr2[i][0];
        isPresent = true;
      }
    }
    if (!isPresent) {
      newItems.push(arr2[i]);
    }
  }
  
  for (var k = 0; k < newItems.length; k++) {
    inventory.push(newItems[k]);
  }
  
  // sort array alphabetically
  inventory = inventory.sort(orderInventoryAlphabetically);
  return inventory;
}

function orderInventoryAlphabetically(x, y) {
  var item1 = x[1].toString().toLowerCase();
  var item2 = y[1].toString().toLowerCase();
  
  if (item1 < item2) {
    return -1;
  } else if (item1 > item2) {
    return 1;
  } else {
    return 0;
  }
}