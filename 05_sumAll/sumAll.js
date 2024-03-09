const sumAll = function (value1, value2) {
  // Checks if any of the values is not a number before they are converted with Math methods
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return "ERROR";
  }
  const first = Math.min(value1, value2);
  const last = Math.max(value1, value2);

  // Checks if any of the values is negative
  if (Math.sign(first) === -1 || Math.sign(last) === -1) {
    return "ERROR";
  }

  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
