const assertEqual = require('./assertEqual')
//finding key by value
const findKeyByValue = (myObject, value) => {
  let keyOfValue;
  let allKeys = Object.keys(myObject); //getting all the keys
  for (let key of allKeys) {
    if (myObject[key] === value) { //checking value of the key === value
      keyOfValue = key;
    }
  }
  return keyOfValue;
};


///Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;