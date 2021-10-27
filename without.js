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

const without = function (source, itemsToRemove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      answer.push(source[i]);
    }
  }
  console.log(answer);
}
let source = [ 1,5,7,8];
let itemsToRemove = [1,7];

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
AssertArraysEqual(words, ["hello", "world", "lighthouse"]);

