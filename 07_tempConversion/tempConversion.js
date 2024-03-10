const convertToCelsius = function (valueF) {
  let valueC = (valueF - 32) / 1.8;
  return Math.round(valueC * 10) / 10;
};

const convertToFahrenheit = function (valueC) {
  let valueF = valueC * 1.8 + 32;
  return Math.round(valueF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
