
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

module.exports = countLetters;