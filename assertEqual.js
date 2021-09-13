// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let cross = String.fromCodePoint(10060);
  let tick = String.fromCodePoint(9989);
  if (actual === expected) {
    console.log(tick + tick + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(cross + cross + " Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);