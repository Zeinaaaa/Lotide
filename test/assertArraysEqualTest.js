const AssertArraysEqual = require("../assertArraysEqual.js")

AssertArraysEqual([1, 2, 3], [3, 2, 1])// => false

AssertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
AssertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false

AssertArraysEqual([1, 2, 3], [1, 2, 3]);