//to count letters
const countLetters = (stringToPass) => {
  const result = {};
  let removeSpace = stringToPass.split(' ').join('');
  for (let letter of removeSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;