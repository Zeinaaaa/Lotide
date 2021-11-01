const eqArrays = require("./eqArray.js");

const AssertArraysEqual = function(arr1, arr2){
  const isEqual = eqArrays(arr1, arr2);
  if (!isEqual){
   console.log( "These arrays are not similar ")
  }else{
    console.log( "Perfect, these arrays are similar")
  }
};


module.exports = AssertArraysEqual;