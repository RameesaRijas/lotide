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

module.exports = findKey;