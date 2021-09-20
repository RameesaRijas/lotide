//without function to remove
const without = (sourceArray, arrayToremoved) => {
  let duplicateArray = sourceArray.slice();
  for (let i = 0; i < duplicateArray.length; i++) {
    for (let j = 0; j < arrayToremoved.length; j++) {
      if (duplicateArray[i] === arrayToremoved[j]) {
        duplicateArray.splice(i, 1);
      }
    }
  }
  return duplicateArray;
};

module.exports = without;