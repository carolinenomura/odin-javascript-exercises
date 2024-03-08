const repeatString = function (str, amount) {
  let result = "";
  if (Math.sign(amount) === -1) return "ERROR";
  for (let i = 0; i < amount; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
