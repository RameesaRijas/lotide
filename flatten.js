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

//output to console
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

//flatten array to single array
const flatten = (arrayToFlatten) => {
  let resultArray = [];
  for (let arrayItems of arrayToFlatten) {
    if (Array.isArray(arrayItems)) {
      for (let arrayItem of arrayItems) {
        resultArray.push(arrayItem);
      }
    } else {
      resultArray.push(arrayItems);
    }
  }
  return resultArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

