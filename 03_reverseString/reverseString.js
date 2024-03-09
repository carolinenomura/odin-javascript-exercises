const reverseString = function (str) {
  let strArray = str.split("");
  strArray.reverse();
  let reversedStr = strArray.join("");
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
