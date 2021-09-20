//finding letter position
const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  // let removeSpace = sentence.split(' ').join('');
  for (let i = 0 ; i <  sentence.length; i++) {
    let letter = sentence[i];
    if(letter !== " ") {
      if (result[letter]) {
        result[letter].push(i); //pushing to array
      }
      else {
        result[letter] = []; //no array present creating a new array
        result[letter].push(i);
      }
    }
  }
  return result;
};

module.exports = letterPositions;
