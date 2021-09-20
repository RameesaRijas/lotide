# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ramiza/lotide`

**Require it:**

`const _ = require('@ramiza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

**assertEqual(actual, expected)** : 
>let us determine if we have failed assertions , like comparing two strings, actual string given and expected one

**head(array)** : 
>To find first element(head) of an array.

**tail(array)**
> To find the tail element of an array

**middle(array)**
>For getting the middle values of an array.

**flatten(array)**
>For printing as linear array if having nested arrays.

**eqArray(array1, array2)**
> Checking each array equal , used assertEqual function to console message.

**assertArrayEqual(array1, array2)**
> Created a function for printing.

**countLetters(string)**
>Counting the number of letters in a sentence/ word.

**letterPositions**
>For finding the letter positions

**countOnly(string)**
>Counting the total number of word / name inside obj.

**eqObject(obj1, obj2)**
>Find if both objects are same.

**assertObjectsEqual(actual, expected)**
>Assert Message printed for object comparison.

**findKey(object, key)**
>For finding the specific key in an object.

**findKeyByValue(object, value)**
>Find key by searching by it's value.

**map(obj, value)**
>map function

**takeUntil(objects, callback)**
>Take until the specific value reaches, used call back function.






