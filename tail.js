//checking assertEqual function
const assertEqual = require('./assertEqual');

//tail function
const tail = function(array) {
  let duplicateArray = [];
  if (array.length > 1) {
    duplicateArray = array.slice(1);
  }
  return duplicateArray;
};

module.exports = {tail, assertEqual};