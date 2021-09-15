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
  let object1Length = Object.keys(object1);
  let object2Length = Object.keys(object2);
  if (object1Length.length !== object2Length.length) {
    return false;
  }
  for (let key of object1Length) {
    //if array object is array checking with eq array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let arrEquality = eqArrays(object1[key], object2[key]);
      if (!arrEquality) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {//if it's primitive type
      return false;
    }
  }
  return true;
};

//AssertObject Function
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  let cross = String.fromCodePoint(10060);//cross emoji
  let tick = String.fromCodePoint(9989);//tick emoji
  let result = eqObjects(obj1, obj2);
  if (result) {
    console.log(`${tick}${tick} Assertion Passed : ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${cross}${cross} Assertion Failed : ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};


//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false