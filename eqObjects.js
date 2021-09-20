const eqArrays = require("./eqArrays");
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

module.exports = eqObjects;