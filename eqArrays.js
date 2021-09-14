// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let cross = String.fromCodePoint(10060);//cross emoji
  let tick = String.fromCodePoint(9989);//tick emoji
  if (actual === expected) {
    console.log(`${tick}${tick} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${cross}${cross} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//out put return
const eqArrays = (arrayOne , arrayTwo) => {
  let result = "";
  if(arrayOne.length !== arrayTwo.length) {
    return false;
  } 
  result = arrayMatch(arrayOne, arrayTwo);
  return result;
}

//checking if array is matched or else return false
const arrayMatch = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false ;
    } 
  }
  return true;
}


assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 