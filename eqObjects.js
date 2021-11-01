const eqArrays = require('./eqArray.js');

const eqObjects = function(object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);
  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  }
  for (const value of arrayOfKeys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      return eqArrays(object1[value], object2[value]);
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };
;

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;