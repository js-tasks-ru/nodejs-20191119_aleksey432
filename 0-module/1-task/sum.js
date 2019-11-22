function isNumeric(n) {
  return typeof n === 'number';
}

function sum(a, b) {
  if (!isNumeric(a) || !isNumeric(b)) {
    throw new TypeError('Arguments type error');
  }
  return a + b;
}

module.exports = sum;
