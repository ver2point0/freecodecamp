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

var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(value) {
  return value + 3;
});

var mapArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var newMapArray = mapArray.map(function(num) {
  return num * 10;
});

var randomWholeNumber = Math.floor(Math.random() * 100);
var randomArray = [randomWholeNumber, randomWholeNumber];
var singleNumber = 0;
singleNumber = randomArray.reduce(function(previous, current) {
  return previous + current;
}, 0);

var filterArr = [1,2,3,4,5,6,7,8,9,10];

var newFilterArr = filterArr.filter(function(value) {
  return value > 4;
});

filterArr.sort(function(a, b) {
  return b - a;
});

var reverseArr = filterArr.reverse();

var numArr = [10, 9, 8];
var stringArr = ["sadf", "sldkj", "saldkj"];
var charArr = ['d', 'e', 'i'];
var mixArr = [];

mixArr = numArr.concat(stringArr.concat(charArr));

var stringSentence = "This is a sentence with words that is going to be split.";
var splitArr = stringSentence.split(" ");