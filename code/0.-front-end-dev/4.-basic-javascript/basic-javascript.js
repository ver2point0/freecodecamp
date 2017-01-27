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