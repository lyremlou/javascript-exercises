const reverseString = function (string) {
  let splitString = string.split("");
  let reversedArray = splitString.reverse();
  let newString = reversedArray.join("").toString();
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
