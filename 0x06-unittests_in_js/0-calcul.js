module.exports = function calculateNumber (a, b = 0) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }
  return Math.round(a) + Math.round(b);
};
