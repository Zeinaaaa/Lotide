const letterPositions = function(sentence) {
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

module.exports = letterPositions;