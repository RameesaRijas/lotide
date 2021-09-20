const assert = require("chai").assert;
const _ = require("../index");


describe("#takeUntil", () => {
  it('it should return [ 1, 2, 5, 7, 2 ] when only returning > 0 values', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  })
  it("it should return [ 'I\'ve', 'been', 'to', 'Hollywood' ] when only give , as seperator values", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(_.takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  })
});