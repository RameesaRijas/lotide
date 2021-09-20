//takeUntil function
const takeUntil = (array, callback) => {
  // ...
  for (const [index, value] of array.entries())
    if (callback(value)) {
      return array.slice(0, index);
    }
  return array;
};

module.exports = takeUntil;