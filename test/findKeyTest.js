const assert = require("chai").assert;
const _ = require("../index");


//tets cases get 1st one with the condition
const objectStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("should return noma when passed 2", () =>{
      assert.equal(_.findKey(objectStars, x => x.stars === 2), "noma");
  });

  it("should return akaleri when passed 3", () => {
    assert.equal(_.findKey(objectStars, x => x.stars === 3), "Akaleri");
  });

  it("should return Blue Hill when passing 1", () => {
    assert.equal(_.findKey(objectStars, x => x.stars === 1), "Blue Hill");
  });
  it("should return undefined when passing 4", () => {
    assert.equal(_.findKey(objectStars, x => x.stars === 4), undefined);
  });
});
