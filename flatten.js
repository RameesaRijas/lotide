const assertArraysEqual  = require('./assertArrayEqual');
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
module.exports = flatten;
