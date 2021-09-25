//out put return
const eqArrays = (arrayOne , arrayTwo) => {
  if (!arrayOne.length && !arrayTwo.length) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //checking if array is matched or else return false
  for (let i = 0; i < arrayOne.length; i++) {
    //different type does not match
    if (typeof arrayOne[i] !== typeof arrayTwo[i]) {
      return false;
    }
    //array inside an array
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      //recursive callling
      const value = eqArrays(arrayOne[i], arrayTwo[i]);
      if (!value) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } 
  }
  return true;
};

module.exports = eqArrays;