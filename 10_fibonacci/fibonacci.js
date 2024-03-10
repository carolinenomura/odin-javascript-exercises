const fibonacci = function (member) {
  if (member == 0) {
    return 0;
  } else if (member < 0) {
    return 'OOPS';
  } else {
    let f0 = 0;
    let f1 = 1;
    let f2 = f1;
    for (let i = 1; i < member; i++) {
      f2 = f0 + f1;
      f0 = f1;
      f1 = f2;
    }
    return f2;
  }
};

// Do not edit below this line
module.exports = fibonacci;
