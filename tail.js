const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = (array) => {
  let b = array.slice(1);
  return b;
};

 module.exports = tail;