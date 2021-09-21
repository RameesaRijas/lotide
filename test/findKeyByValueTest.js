const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");
///Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return drama when passed The Wire", () => {
      assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });

  it("should return comedy when passed Brooklyn Nine-Nine", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
  });

  it("should return sci_fi when passing The Expanse", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  });
});