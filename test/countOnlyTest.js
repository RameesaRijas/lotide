const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  it("shpuld return 1 when name is Jason", () => {

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Jason"], 1);

  });
  it("shpuld return undefined when name is Karima", () => {

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Karima"], undefined);

  });
  it("shpuld return 2 when name is Fang", () => {

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Fang"], 2);

  });
  it("shpuld return undefined when name is Agouhanna", () => {

    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Agouhanna"], undefined);

  });


});
