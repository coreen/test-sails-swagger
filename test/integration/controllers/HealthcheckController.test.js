const request = require('supertest');

describe('HealthcheckController', () => {
  describe('healthcheck', () => {
    it('should return 200 with health OK when pokedex loaded successfully', (done) => {
      request(sails.hooks.http.app)
        .get('/healthcheck')
        .expect(200)
        .expect({
          "health": "ok"
        }, done);
    });

    // NOTE: has to run with .only since deletes database rest of tests rely on
    it.skip('should return 503 with health BAD when pokedex fails to load', (done) => {
      Pokemon.destroy({}).exec(function(err, deleted) {
        request(sails.hooks.http.app)
          .get('/healthcheck')
          .expect(503)
          .expect({
            "health": "bad"
          }, done);
      });
    });
  });
});
