const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('test the send payment request method', () => {
    const paymentSpy = sinon.stub(utils, 'calculateNumber');
    paymentSpy.returns(10);
    const reqApi = sendPaymentRequestToApi(100, 20);
    const consoleSpy = sinon.spy(console, 'log');

    expect(paymentSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);

    paymentSpy.restore();
    consoleSpy.restore();
  });
});
