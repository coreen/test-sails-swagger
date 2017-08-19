const request = require('supertest');

describe('HealthcheckController', () => {
  describe('healthcheck', () => {
    it('should return 200 with health OK', (done) => {
      request(sails.hooks.http.app)
        .get('/healthcheck')
        .expect(200)
        .expect({
          "health": "ok"
        }, done);
    });
  });
});
