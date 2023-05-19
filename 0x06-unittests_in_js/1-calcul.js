module.exports = function calculateNumber (type, a = 0, b = 0) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }

  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else {
    if (Math.round(b) === '0') {
      return ('Error');
    }
    return Math.round(a) / Math.round(b);
  }
};
