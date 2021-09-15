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


const middle = (arrayOfElement) => {
  let middleElementArray = [];
  if (arrayOfElement.length > 2) {
    // even-length array (two middle elements)
    if (arrayOfElement.length % 2 === 0) {
      let middleEvenArray = arrayOfElement[(arrayOfElement.length / 2) - 1];
      middleElementArray.push(middleEvenArray);
    }
    let middleElement = arrayOfElement[Math.floor(arrayOfElement.length / 2)];
    middleElementArray.push(middleElement);
  }
  return middleElementArray;
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]) , []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);