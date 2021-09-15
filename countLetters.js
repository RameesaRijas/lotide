//output code
const assertEqual = function(actual, expected) {
  let cross = String.fromCodePoint(10060);//cross emoji
  let tick = String.fromCodePoint(9989);//tick emoji
  if (actual === expected) {
    console.log(`${tick}${tick} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${cross}${cross} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//test code
const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const extractValue = countLetters("lighthouse in the house");

assertEqual(extractValue["u"] , expected["u"]);
assertEqual(extractValue["h"] , expected["h"]);
assertEqual(extractValue["c"] , expected["u"]);
assertEqual(extractValue["n"] , expected["n"]);