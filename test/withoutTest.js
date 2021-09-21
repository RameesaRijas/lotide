const assert = require("chai").assert;
const without = require("../without");


describe("#without", () => {
  it('should return equal to ["hello", "world"] when removed lighthouse from ["hello", "world", "lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"])
  });

  it('should return equal to ["hello"] when removed lighthouse from ["hello", "world"]', () => {
    const words = ["hello", "world"];
    assert.deepEqual(without(words, ["world"]), ["hello"])
  });

})