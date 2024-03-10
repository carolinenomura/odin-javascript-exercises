const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (arr) {
  let total = 1;
  arr.forEach((element) => {
    total *= element;
  });
  return total;
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
