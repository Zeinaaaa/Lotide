const eqArrays = require("./eqArray");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = function(obj1, obj2) {
  // Implement me!
  const isEqual = eqObjects(obj1, obj2);
  if (!isEqual){
   console.log( "These objects are not similar ")
  }else{
    console.log( "Perfect, these objects are similar")
  }
};

