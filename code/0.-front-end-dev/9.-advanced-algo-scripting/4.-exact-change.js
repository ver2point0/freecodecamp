function checkCashRegister(price, cash, cid) {
  cash *= 100;
  price *= 100;
  
  var change = cash - price;
  var changeLeft = change;
  
  var totalCid = getTotalCid(cid);
  var result = [];
  
  if (change > totalCid) {
    return "Insufficient Funds";
  } else if (change === totalCid) {
    return "Closed";
  }
  
  for (var i = cid.length - 1; i >= 0; i--) {
    var coinName = cid[i][0],
        coinTotal = cid[i][1] * 100,
        coinValue = getValue(coinName),
        coinAmount = coinTotal / coinValue,
        toReturn = 0;
        
    while (changeLeft >= coinValue && coinAmount > 0) {
      changeLeft -= coinValue;
      coinAmount--;
      toReturn++;
    }
    
    if (toReturn > 0) {
      result.push([coinName, toReturn * (coinValue / 100)]);
    }
  }
  
  if (getTotalCid(result) != change) {
    return "Insufficient Funds";
  }
  return result;
  
  function getTotalCid(cid) {
    var total = 0;
    for (var i = 0; i < cid.length; i++) {
      total += cid[i][1] * 100;
    }
    return total;
  }
  
  function getValue(denomination) {
    switch (denomination) {
      case "PENNY":
        return 1;
      case "NICKEL":
        return 5;
      case "DIME":
        return 10;
      case "QUARTER":
        return 25;
      case "ONE":
        return 100;
      case "FIVE":
        return 500;
      case "TEN":
        return 1000;
      case "TWENTY":
        return 2000;
      case "ONE HUNDRED":
        return 10000;
    }
  }
}