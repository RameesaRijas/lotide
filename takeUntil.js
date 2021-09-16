//takeUntil function
const takeUntil = (array, callback) => {
  // ...
  for (const [index, value] of array.entries())
    if (callback(value)) {
      return array.slice(0, index);
    }
  return array;
};

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


//input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
