const Utils = {
  calculateNumber (type, a = 0, b = 0) {
    if (type === 'SUM') return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE') return Math.round(b) !== 0 ? Math.round(a) / Math.round(b) : 'ERROR';
  }
};

module.exports = Utils;
