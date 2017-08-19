describe('PokemonModel', function() {
  describe('get all', function() {
    it('should check find function', function (done) {
      Pokemon.find()
        .then(function(results) {
          // TODO: add some tests here
          done();
        })
        .catch(done);
    });
  });

  describe('get one', function() {
    it('should check findOne function', function (done) {
      Pokemon.find()
        .then(function(results) {
          // TODO: add some tests here
          done();
        })
        .catch(done);
    });
  });
});