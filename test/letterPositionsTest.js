const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letter", () => {
  it("should return [2, 3] when passed hello and l letter", () =>{
    
      assert.deepEqual(letterPositions("hello").l, [2, 3]);

  });
  it("should return [0] when passed hello and h character ", () =>{

      assert.deepEqual(letterPositions("hello").h, [0]);

  });
  it("should return [7] when passed lighthouselab", () =>{

      assert.deepEqual(letterPositions("lighthouselab").u, [7]);

  });
});