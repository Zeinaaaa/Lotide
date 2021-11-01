const without = function (source, itemsToRemove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      answer.push(source[i]);
    }
  }
  console.log(answer);
}

module.exports = without;

.