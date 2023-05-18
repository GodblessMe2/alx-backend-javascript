const utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = utils.calculateNumber('SUM', totalAmount, totalShipping);
  return result;
};

module.exports = sendPaymentRequestToApi;
