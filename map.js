const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);



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

AssertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

AssertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ])
AssertArraysEqual(map(words, word => word[2]), [ 'g', 'c', 't', 'm', 't' ])