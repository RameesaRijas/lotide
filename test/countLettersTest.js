const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it('should return 1 when passed lighthouse as word and l as letters', () => {
    
    assert.equal(countLetters("lighthouse in the house").l, 1);

  })
  it('should return 1 when passed lighthouse as word and n as letters', () => {
    
    assert.equal(countLetters("lighthouse in the house").n, 1);

  })
  it('should return 2 when passed lighthouse as word and u as letters', () => {
    
    assert.equal(countLetters("lighthouse in the house").u, 2);

  })
  it('should return undefined when passed lighthouse as word and c as letters', () => {
    
    assert.equal(countLetters("lighthouse in the house").c, undefined);

  })
  it('should return 4 when passed lighthouse as word and h as letters', () => {
    
    assert.equal(countLetters("lighthouse in the house").h, 4);

  })
})