const assert = require("chai").assert;
const _ = require("../index");

describe("#countLetters", () => {
  it('should return 1 when passed lighthouse as word and l as letters', () => {
    
    assert.equal(_.countLetters("lighthouse in the house").l, 1);

  })
  it('should return 1 when passed lighthouse as word and n as letters', () => {
    
    assert.equal(_.countLetters("lighthouse in the house").n, 1);

  })
  it('should return 2 when passed lighthouse as word and u as letters', () => {
    
    assert.equal(_.countLetters("lighthouse in the house").u, 2);

  })
  it('should return undefined when passed lighthouse as word and c as letters', () => {
    
    assert.equal(_.countLetters("lighthouse in the house").c, undefined);

  })
  it('should return 4 when passed lighthouse as word and h as letters', () => {
    
    assert.equal(_.countLetters("lighthouse in the house").h, 4);

  })
})

//test code
// const expected = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };
// const extractValue = 
// assertEqual(extractValue["u"] , expected["u"]);
// assertEqual(extractValue["h"] , expected["h"]);
// assertEqual(extractValue["c"] , expected["u"]);
// assertEqual(extractValue["n"] , expected["n"]);