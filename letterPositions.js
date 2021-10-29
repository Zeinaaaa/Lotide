
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


const letterPositions = function(sentence) {
  //return  an object with indexes in array form;
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if(!results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else if (results[sentence[i]] && sentence[i] !== " "){
      results[sentence[i]].push(i);
    }
  }
  return results;
};

AssertArraysEqual(letterPositions("hello").e, [1]);
AssertArraysEqual(letterPositions("zeinab").a, [4]);
AssertArraysEqual(letterPositions("Adam").d, [1]);
// remove the spaces in the string or the array ;

// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]

//AssertArraysEqual(letterPositions("hello").e, [1]);