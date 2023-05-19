const expect = require('chai').expect;
const request = require('request');

describe('/GET', function () {
  const options = {
    url: 'http://localhost:7865/', method: 'GET'
  };

  it('check correct status code', function (done) {
    request(options, (_err, res, body) => {
      expect(res.should.have.status(200));
      done();
    });
  });

  it('check correct content', function (done) {
    request(options, function (_err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('check correct content length', function (done) {
    request(options, function (_err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
