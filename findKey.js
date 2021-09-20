const assertEqual = require('./assertEqual');
//finding key by value
const findKey = (myObject, callback) => {
  let keyOfValue;
  let allKeys = Object.keys(myObject); //getting all the keys
  for (const key of allKeys) {
    if (callback(myObject[key])) { //checking value of the callback
      return keyOfValue = key;
    }
  }
  return keyOfValue;
};

//tets cases
const objectStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(objectStars, x => x.stars === 2), "noma");// => "noma"

module.exports = findKey;