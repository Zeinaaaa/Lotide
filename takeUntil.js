const takeUntil = function(array, callback) {
  let arr = [];
 for ( let element of array ){
   if (callback(element)){
     return arr;
   } else {
     arr.push(element)
   }
 }
}

module.exports = takeUntil;