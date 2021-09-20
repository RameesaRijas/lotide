const eqArraysFuncs = require('../eqArrays');
const eqArrays = eqArraysFuncs.eqArrays;
const assertEqual = eqArraysFuncs.asserEqual;

//
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);