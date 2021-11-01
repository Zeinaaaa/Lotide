const assert = require('chai').assert;
const AssertArraysEqual = require("../assertArraysEqual.js")

 AssertArraysEqual([1, 2, 3], [3, 2, 1])// => false

// AssertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// AssertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false

// AssertArraysEqual([1, 2, 3], [1, 2, 3]);

describe("#AssertArraysEqual", () => {
  it("returns 'These arrays are not similar' for ['1', '2', '3'], ['1', '2', '3'] ", () => {
    const input = AssertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    assert.equal(input, 'These arrays are not similar');
  })
})