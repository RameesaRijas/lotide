const assert = require("chai").assert;
const map = require("../map");

//Test Inputs
const words = ["ground", "control", "to", "major", "tom"];
const animals = ["dog", "cat", "rabbit"];
const names = ["john", "joe", "mike"];

describe("#map", () => {
  it('should return true if ["ground", "control", "to", "major", "tom"] first letters equal to ["g", "c", "t", "m", "t"]', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])
  });

  it('should return true if ["dog", "cat", "rabbit"] first letters equal to ["d", "c", "r"]', () => {
    assert.deepEqual(map(animals, animal => animal[0]), ["d", "c", "r"])
  });
  
  it('should return false if ["dog", "cat", "rabbit"] second letters equal to ["o", "a", "r"]', () => {
    assert.deepEqual(map(animals, animal => animal[1]), ["o", "a", "a"])
  });
  it('should return true if ["john", "joe", "mike"] first letters equal to ["j", "j", "m"]', () => {
    assert.deepEqual(map(names, name => name[0]), ["j", "j", "m"])
  });
});