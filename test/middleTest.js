const assert = require("chai").assert;
const middle = require('../middle');


describe("#middle", () => {
  it("should return empty array only one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return empty array two element", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return empty array two element", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [2] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3] array odd array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [3, 4] array odd number of element", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });


})