const result = require('../head')
const assertEqual = result.assertEqual;
const head = result.head;
//  Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

