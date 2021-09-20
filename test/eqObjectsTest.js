const assert = require("chai").assert;
const _ = require("../index");


describe("#eqObjects", () => {
  it('should return true when passed { a: "1", b: "2" } { b: "2", a: "1" }', () =>{
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(_.eqObjects(ab, ba));
  });

  it('should return false when passed { a: "1", b: "2", c: "3" } { a: "1", b: "2" }', () => {
    const abc = { a: "1", b: "2", c: "3" };
    const ab = { a: "1", b: "2" };
    assert.isFalse(_.eqObjects(abc, ab));
  });

  it('should return true when passing { d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(_.eqObjects(cd, dc));
  });
  it('should return false when passing { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(_.eqObjects(cd, cd2));
  });




  it('should return false when passing { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(_.eqObjects(cd, dc));
  });



  it('should return true when passing { a: {z : 1}, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.isTrue(_.eqObjects({ a: {z : 1}, b: 2 }, { a: { z: 1 }, b: 2 }));
  });


  it('should return false when passing { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.isFalse(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });


  it('should return flase when passing { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.isFalse(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});