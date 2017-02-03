var mutantCat = {
  "eyes": 10,
  "tails": 20,
  "legs": 2
};

var MutantCat = function() {
  this.eyes = 10;
  this.tails = 20;
  this.legs = 2;
};

var coolCat = new MutantCat();
coolCat.flightTime = 60;

var MutantCat = function(e, t, l) {
  this.eyes = e;
  this.tails = t;
  this.legs = l;
};

var customCat = new MutantCat(20, 123, 323);

var MutantDog = function() {
  var powerLevel = 0;
  
  this.decreasePowerLevel = function(substract) {
    powerLevel -= substract;
  };
  
  this.increasePowerLevel = function(add) {
    powerLevel += add;
  };
  
  this.getPowerLevel = function() {
    return powerLevel;
  };
};