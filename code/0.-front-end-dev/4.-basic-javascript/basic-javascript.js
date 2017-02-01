// single line comment
/*
  multi-line comment
*/

var myName = "jane doe";

var myNum = 0;

var camelCase;
camelCase = "This is camelCase.";

var sum = 23 + 198;
var difference = 1221 - 123;
var product = 77 * 10;
var quotient = 2 / 1;

myNum++;

myNum--;

var myDecimal = 123.4;

var decimalProduct = 2.0 * myDecimal;

var decimalQuotient = myDecimal / decimalProduct;

var myRemainder = 123 % 2;

var augmentAdd = 10;
augmentAdd += 30;
augmentAdd -= 35;
augmentAdd *= 100;
augmentAdd /= 5;

function convertCToF(c) {
  var f;
  f = (c * (9/5)) + 32;
  return f;
}

var myFName = "jane";
var myLName = "doe";

var doubleQuotes = "\"Double quoted\".";

var singleQoutes = 'This is a single-quoted "string" with "double" quotes.';

var escapeSequence = "FirstLine\n\\SecondLine\\\rThirdLine";

var concatString = "This " + "is" + " concatenated.";

var concatPlus = "Cat-";
concatPlus += "Dog";

var stringVar = "This is my " + concatPlus + " friend."

var itemTwo = "This is item 2.";
var itemOne = "This is item 1. ";
itemOne += itemTwo;

var nameLength = "Jane Doe".length;

var firstCharacter = "asdfkj;l"[0];

var firstString = "mispelld";
firstString = "misspelled";

var comeHere = "Come Here";
var comeThere = comeHere[5];

var lastCharacter ="Last Character";
var lastLetter = lastCharacter[lastCharacter.length - 1];

var secondToLastCharacter = "2nd to last";
var secondToLast = secondToLastCharacter[secondToLastCharacter.length - 2];

function blankWords(noun, adjective, verb, adverb) {
  var result = noun + ", " + adjective + ", " + verb + ", " + adverb;
  return result;
}

blankWords("cat", "black", "ate", "soundly");

var mixValueArray = ["string", 1, 'c'];

var multiDimenArray = [["one", ""], [1, 2], ['a', 'b', 'c']];
multiDimenArray[0];
multiDimenArray[0][1] = "two";

var accesMultiArray = multiDimenArray[2][2];

// add element to back of array
var pushArray = multiDimenArray.push(["ee", "oo", "ii", "uu", "aa"]);

// remove element from back of array
var popArray = multiDimenArray.pop();

// remove element from front of array
var shiftArray = multiDimenArray.shift();

// add element to front of array
var unshiftArray = multiDimenArray.unshift(["aasdf", 123, 'c']);

var foodList = [
  ["food 1", 1],
  ["food 2", 2],
  ["food 3", 3],
  ["food 4", 4],
  ["food 5", 5]
];

function countToTen() {
  var i;
  for (i = 0; i < 11; i++) { 
    console.log(i);
  }
}

function countBackwards(startingNum, endingNum) {
  var i;
  for (i = startingNum; i > endingNum; i--) { 
    console.log(i);
  } 
}

var myGlobal = 20;

function oopsGlobalShouldNotBeGlobalInsideThisFunction() {
  oopsGlobal = 200;
}

function useGlobalOutofScope() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  var myVar = "local";
  console.log(myVar);
}

myLocalScope();

//console.log(myVar); undefined because it is outside of scope

// Setup
var cheese = "Cheddar";

function cheeseOrCheese() {
  var cheese = "Swiss";
  return cheese;

  return cheese;
}

cheeseOrCheese();

function divideTen(n) {
  return n / 10;
}


var say = "You are ";

function sayMyName(name) {
  return say + name + "!";
}

say = sayMyName("Heisenberg");

function queueLine(array, item) {
  array.push(item);
  return array.shift([0]);
}

function returnTrue() {
return !false;
}

function tOrF(oneOrZero) {
  if (oneOrZero) {
    return "This is the one.";
  }
  return "This is not the one.";
}

function valueEqual(val) {
  if (val == 100) { // tests value not data type
    return "They are equal";
  }
  return "They are not equal";
}

function valueAndDataTypeEqual(val) {
  if (val === 10) { // tests value and data type
    return "They are equal";
  }
  return "They are not equal";
}

function notEqual(val) {
  if (val != 1) { 
    return "They are not equal";
  }
  return "They are equal";
}

function strictNotEqual(val) {
  if (val !== 1) { 
    return "They are not equal";
  }
  return "They are equal";
}

function greaterThan(val) {
  if (val > 123) { 
    return "More than 123";
  }
  return "Less than 123";
}

function greaterThanOrEqual(val) {
  if (val >= 55) { 
    return "55 or over";
  }
  return "Less than 55";
}

function lessThan(val) {
  if (val < 55) { 
    return "Less than 55";
  }
  return "55 or over";
}

function lessThanOrEqual(val) {
  if (val <= 12) { 
    return "Less than 12";
  }
  return "12 or over";
}

function logicAnd(val) {
  if (val >= 1 && val <= 5) { 
    return "You got it!";
  }
  return "Try again!";
}

function logicOr(val) {
  if (val < 1 || val > 5) { 
    return "You got it!";
  }
  return "Try again!";
}

function elseState(value) {
  if (value === 1) { 
    return "RIGHT!";
  } else {
    return "wrong!";
  }
}

function elseIfState(value) {
  if (value === 1) { 
    return "Right Once!";
  } else if (value === 2) {
    return "Right Twice!";
  } else {
    return "Wrong more often!"
  }
}

function chainElseIfState(value) {
  if (value === 1) { 
    return "Right Once!";
  } else if (value === 2) {
    return "Right Twice!";
  } else if (value === 3) {
    return "Right Thrice!";
  } else if (value === 4) {
    return "Right four times!";
  } else {
    return "You're not right!"
  }
}

function discGolfScore(par, throws) {
  if (throws === 1) {
    return "Hole-in-one!";
  } else if (throws <= par - 2) {
    return "Eagle";
  } else if (throws === par - 1) {
    return "Birdie";
  } else if (throws === par) {
    return "Par";
  } else if (throws === par + 1) {
    return "Bogey";
  } else if (throws === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

function switchStatement(grade) {
  var letter = "";
  switch (grade) {
    case grade >= 90:
      letter = "A";
      break;
    case grade >= 80:
      letter = "B";
      break;
    case grade >= 70:
      letter = "C";
      break;
    case grade >= 60:
      letter = "D";
      break;
  }
  return letter;  
}

function switchDefaultStatement(grade) {
  var letter = "";
  switch (grade) {
    case grade >= 90:
      letter = "A";
      break;
    case grade >= 80:
      letter = "B";
      break;
    case grade >= 70:
      letter = "C";
      break;
    case grade >= 60:
      letter = "D";
      break;
    default:
      letter = "F";
      break;
  }
  return letter;  
}

function mulitpleOptions(grade) {
  var result = "";
  switch (grade) {
    case 100:
    case 90:
    case 80:
      result = "Excellent";
      break;
    case 70:
    case 60:
      result = "Satisfactory";
      break;
    case 50:
    case 40:
    case 30:
      result = "Unsatisfactory";
  }
  return result;  
}

function whichIsLess(x, y) {
  return x < y; 
}

function returnEarly(x, y) {
  if (x < 0 || y > 0) {
    return undefined;
  }
}

var count = 0;

function countCards(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
  }
  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
}

var numbers = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3
};

var zero = numbers.zero;
var one = numbers.one;

var two = numbers["two"];
var three = numbers["three"];

var zeroValue = "zero";
var valueOfZero = numbers[zeroValue];

numbers.zero = "This is zero";

numbers.four = 4;

delete numbers.three; // delete numbers["three"];

function numbersLookup(number) {
  var numbers = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3
  };
  return numbers[number];
}

function checkObjectNumbers(checkNum) {
  if (numbers.hasOwnProperty(checkNum)) {
    return numbers[checkNum];
  } else {
    return "Not Found";
  }
}

var elements = [
  {
    "element_name": "Hydrogen",
    "chemical_symbol": "H",
    "year_discovered": 1766,
    "isotopes": [ "Protium", "Deuterium", "Tritium" ],
    "naturally_occurring": true
  },
  {
    "element_name": "Iron",
    "chemical_symbol": "Fe",
    "year_discovered": "before 5000 BC",
    "isotopes": [ "54^Fe", "56^Fe", "57^Fe" ],
    "naturally_occurring": true
  }
];

var element = {
  "Hydrogen": {
    "element_name": "Hydrogen",
    "chemical_symbol": "H",
    "year_discovered": 1766,
    "isotopes": [ "Protium", "Deuterium", "Tritium" ],
    "naturally_occurring": true
  }
};

var accessNestedObject = element.Hydrogen.isotopes[0];

var accessNestedArray = elements[0].isotopes[0];

var iterateForLoop = [];
for (var i = 0; i < 10; i++) {
  iterateForLoop.push(i);
}

for (var i = 1; i < 10; i += 2) {
  iterateForLoop.push(i);
}

for (var i = 10; i > 0; i -= 2) {
  iterateForLoop.push(i);
}

var iterThruArray = [1, 2, 3, 4, 10, 100];
var totalSum = 0;
for (var i = 0; i < iterThruArray.length; i++) {
  totalSum += iterThruArray[i];
}

function multiplyArray(mArray) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < mArray.length; i++) {
    for (var j = 0; j < mArray[i].length; j++) {
      product *= mArray[i][j];
    }
  }
  return product;
}

var arr = [];
var x = 0;
while (x < 100) {
  arr.push(x);
  x++;
}

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
 for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
    }
  }
  return "No such contact";
}

function randomFraction() {
  return Math.random();
}