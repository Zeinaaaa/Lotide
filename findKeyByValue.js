
const findKeyByValue = function(obj, val) {
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj)
  for (let i = 0; i < objectValues.length; i++){
    if (val === objectValues[i]) {
      return objectKeys[i];
    }
  }
}

module.exports = findKeyByValue;