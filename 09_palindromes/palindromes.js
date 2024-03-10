const palindromes = function (str) {
  const strippedStr = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, '')
    .split('');
  const forwardStr = strippedStr.join('');
  const backwardStr = strippedStr.reverse().join('');
  return forwardStr === backwardStr;
};

// Do not edit below this line
module.exports = palindromes;
