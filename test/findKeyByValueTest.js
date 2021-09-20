const assert = require("chai").assert;
const _ = require("../index");
///Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return drama when passed The Wire", () => {
      assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });

  it("should return comedy when passed Brooklyn Nine-Nine", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
  });

  it("should return sci_fi when passing The Expanse", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  });
});