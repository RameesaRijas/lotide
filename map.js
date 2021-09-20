//Test Inputs
const words = ["ground", "control", "to", "major", "tom"];
const animals = ["dog", "cat", "rabbit"];
const names = ["john", "joe", "mike"];

//function map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//getting two arrays for comparing
const eqArrays = (arrayOne , arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //checking if array is matched or else return false
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

//input to console
const assertArraysEqual = (arr1, arr2) => {
  let cross = String.fromCodePoint(10060);//cross emoji
  let tick = String.fromCodePoint(9989);//tick emoji
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`${tick}${tick} Assertion Passed`);
  } else {
    console.log(`${cross}${cross} Assertion Failed`);
  }
};

//Test code
const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[0]);
const results3 = map(names, name => name[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["d", "c", "r"]);
assertArraysEqual(results3, ["j", "j", "m"]);

module.exports = map;