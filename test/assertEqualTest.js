// TEST CODE
const assertEqual = require("../assertEqual.js")
const assert = require("chai").assert;
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(50, "50");
// assertEqual(11, 1);

describe("#assertEqual", () => {
  it("return `👎🏻 Assertion Failed: ${actual} !== ${expected}` for 'Lighthouse Labs', 'Bootcamp'", () => {
    const input = assertEqual("Lighthouse Labs", "Bootcamp");
    assert.strictEqual(input, "👎🏻 Assertion Failed: ${actual} !== ${expected}")
  })
})
