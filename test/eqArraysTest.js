const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

//
describe("#eqArray", () => {
  it("should return true when passed [1, 2, 5, 6], [1, 2, 5, 6]", () =>{
      assert.isTrue(eqArrays([1, 2, 5, 6], [1, 2, 5, 6]))
  });

  it("should return false when passed [1, 2] , [1]", () => {
    assert.isFalse(eqArrays([1, 2], [1]))
  });

  it("should return FALSE when passing []", () => {
    assert.isFalse(eqArrays([], []));
  });
  it('should return true when passing ["lighthouse", "hello"], ["lighthouse", "hello"]', () => {
    assert.isTrue(eqArrays(["lighthouse", "hello"], ["lighthouse", "hello"]));
  });

  it("should return true when passing [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return false when passing [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("should return false when passing [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

});