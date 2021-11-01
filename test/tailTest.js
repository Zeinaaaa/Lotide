const tail = require("../Tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] for['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("return 2 for tail.length", () => {
    result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2)
  });
  it("return 2 for tail.length", () => {
    result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse")
  });
})