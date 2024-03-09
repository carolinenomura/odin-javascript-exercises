const removeFromArray = function (arr) {
  const args = Array.prototype.slice.call(arguments, 1);
  // Keeps only elements not passed in the arguments
  return arr.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
