function averageAltitudeToOrbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriod = [];
  for (var i = 0; i < arr.length; i++){
    var sqrtAlfaMu = Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3)/GM);
    var oP = Math.round(2 * Math.PI * sqrtAlfaMu);
    orbitalPeriod.push({
      name:   arr[i].name,
      oP: oP
    });
  }
  return orbitalPeriod;
}