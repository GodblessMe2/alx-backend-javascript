const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('test the send Pyament Request with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.false;
    expect(consoleSpy.CalledOnce);
  });

  it('test the send Payment Request with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.false;
    expect(consoleSpy.CalledOnce);
  });
});
