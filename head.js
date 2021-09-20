//to find head of array
const head = function(array) {
  //for preventing changes in original array
  var newArray = array.slice(0, 1); 
  const firstElement = newArray.shift();
  return firstElement;
};

module.exports = head;
