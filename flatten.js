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

module.exports = flatten;
