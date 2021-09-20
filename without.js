//getting input arrays
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

//without function to remove
const without = (sourceArray, arrayToremoved) => {
  let duplicateArray = sourceArray.slice();
  for (let i = 0; i < duplicateArray.length; i++) {
    for (let j = 0; j < arrayToremoved.length; j++) {
      if (duplicateArray[i] === arrayToremoved[j]) {
        duplicateArray.splice(i, 1);
      }
    }
  }
  return duplicateArray;
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;