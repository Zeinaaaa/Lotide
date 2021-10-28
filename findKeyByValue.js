const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎🏻 Assertion Failed: ${actual} !== ${expected}`);
  }

};
// loop through the values.
//if val = values[i] --> return key[i]

const findKeyByValue = function(obj, val) {
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj)
  for (let i = 0; i < objectValues.length; i++){
    if (val === objectValues[i]) {
      return objectKeys[i];
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);