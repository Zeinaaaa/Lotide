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

const AssertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (!isEqual) {
    console.log("These arrays are not similar ");
  } else {
    console.log("Perfect, these arrays are similar");
  }
};


const middle = function(arr) {
  let answer = [];
  let i = 0;
  if (arr.length === 1 || arr.length === 2) {
    answer = [];
  } else if (arr.length % 2 !== 0) {
    i += ((arr.length - 1) / 2);
    answer.push(arr[i]);
  } else if (arr.length % 2 === 0) {
    i += (arr.length / 2);
    answer.push(arr[i - 1]);
    answer.push(arr[i]);
  }
  return answer;
};


module.exports = middle;