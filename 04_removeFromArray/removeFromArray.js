const removeFromArray = function (array, ...nums) {
    for (const num of nums) {
      for (let i = 0; i < array.length; i++) {
        if (array.includes(num)) {
          let position = array.indexOf(num);
          array.splice(position, 1);
        }
      }
    }
  
    return array;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
