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