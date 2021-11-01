
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item] > 0) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

const countLetters = function(sentence) {
  const result = {};
  const arr = sentence.split('');
  for (const letter of arr) {
    if (letter !== " "){
      if (result[letter] > 0) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;