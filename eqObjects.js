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

//output return
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

//comparing objects
const eqObjects = (object1, object2) => {
  let object1Keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  if (object1Keys.length !== object2keys.length) {
    return false;
  }
  for (let key of object1Keys) {
    //if array object is array checking with eq array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let arrEquality = eqArrays(object1[key], object2[key]);
      if (!arrEquality) {
        return false;
      }
    //if object is object recursively calling function
    } else if ((typeof object1[key] === "object" && typeof object2[key] ===   "object") && !Array.isArray(object2[key]) && !Array.isArray(object1[key])) {
      return eqObjects(object1[key], object2[key]);

    } else if (object1[key] !== object2[key]) {//if it's primitive type
      return false;
    }
  }
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc) , true); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false