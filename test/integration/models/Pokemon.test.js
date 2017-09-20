const should = require('should');

describe('PokemonModel', function() {
  describe('get all', function() {
    it('should not be empty', function (done) {
      Pokemon.find({})
        .exec(function(err, results) {
          if (err)
            done(err);

          results.length.should.not.equal(0);
          done();
        });
    });
  });

  describe('get one', function() {
    it('should return correct contents based on query', function (done) {
      Pokemon.findOne({
        pokemonId: 1
      })
      .exec(function(err, result) {
        if (err)
          done(err);

        result.should.have.property('pokemonId');
        result.pokemonId.should.equal(1);
        result.should.have.property('name');
        result.name.should.equal('Bulbasaur');
        result.should.have.property('type');
        result.type.should.equal('grass');
        done();
      });
    });
  });
});