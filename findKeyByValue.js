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

module.exports = findKeyByValue;