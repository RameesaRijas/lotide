const assert = require("chai").assert;
const _ = require("../index");


describe("#without", () => {
  it('should return equal to ["hello", "world"] when removed lighthouse from ["hello", "world", "lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(_.without(words, ["lighthouse"]), ["hello", "world"])
  });

  it('should return equal to ["hello"] when removed lighthouse from ["hello", "world"]', () => {
    const words = ["hello", "world"];
    assert.deepEqual(_.without(words, ["world"]), ["hello"])
  });

})