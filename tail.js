//checking assertEqual function
const assertEqual = function(actual, expected) {
  let cross = String.fromCodePoint(10060);//cross emoji
  let tick = String.fromCodePoint(9989);//tick emoji
  if (actual === expected) {
    console.log(`${tick}${tick} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${cross}${cross} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//tail function
const tail = function(array) {
  let duplicateArray = [];
  if (array.length > 1) {
    duplicateArray = array.slice(1);
  }
  return duplicateArray;
};

//Test Case 1 : 
const result = tail(["Hello", "Lighthouse", "Hello"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test case 2
const result2 = tail(["Lighthouse", "Hello"]);
assertEqual(result2.length, 1); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[0], "Labs"); // ensure second element is "Labs"

//Test case 3
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!