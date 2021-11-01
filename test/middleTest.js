const middle = require("../middle.js");
const AssertArraysEqual = require("../assertArraysEqual")

AssertArraysEqual(middle([1, 2, 3]), [2]);
AssertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
AssertArraysEqual(middle([1, 2]), []);