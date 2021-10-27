
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const AssertArraysEqual = function(arr1, arr2){
  const isEqual = eqArrays(arr1, arr2);
  if (!isEqual){
   console.log( "These arrays are not similar ")
  }else{
    console.log( "Perfect, these arrays are similar")
  }
};

// TEST CODEeqArrays([1, 2, 3], [1, 2, 3]) // => true
AssertArraysEqual([1, 2, 3], [3, 2, 1])// => false

AssertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
AssertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false

AssertArraysEqual([1, 2, 3], [1, 2, 3]);