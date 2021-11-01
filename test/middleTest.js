const middle = require("../middle.js");
const assert = require("chai").assert;
// const AssertArraysEqual = require("../assertArraysEqual")

// AssertArraysEqual(middle([1, 2, 3]), [2]);
// AssertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// AssertArraysEqual(middle([1, 2]), []);

describe("#middle", () => {
  it("return [2] for [1, 2, 3]]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it("return [2, 3] for [1, 2, 3, 4]]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3] )
  });
  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [] )
  });


});