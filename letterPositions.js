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

//output
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

//finding letter position
const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  // let removeSpace = sentence.split(' ').join('');
  for (let i = 0 ; i <  sentence.length; i++) {
    let letter = sentence[i];
    if(letter !== " ") {
      if (result[letter]) {
        result[letter].push(i); //pushing to array
      }
      else {
        result[letter] = []; //no array present creating a new array
        result[letter].push(i);
      }
    }
  }
  return result;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
