const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if(itemsToCount[item]){
      if(result[item] > 0){
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
}

module.exports = countOnly;
