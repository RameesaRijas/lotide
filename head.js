//function find assertion
const assertEqual = function(actual, expected) {
  let cross = String.fromCodePoint(10060);
  let tick = String.fromCodePoint(9989);
  if (actual === expected) {
    console.log(`${tick}${tick} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${cross}${cross} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//to find head of array
const head = function(array) {
  //for preventing changes in original array
  var newArray = array.slice(0, 1); 
  const firstElement = newArray.shift();
  return firstElement;
};

//  Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");