const Utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  return result;
};

module.exports = sendPaymentRequestToApi;
