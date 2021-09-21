const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#tail", () => {
  it("should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () =>{
      assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("should return [1, 2, 3] when passed [1, [2,3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });

  it("should return [] when passing []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
