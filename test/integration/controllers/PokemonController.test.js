const request = require('supertest');
const pokedex = require('../../../api/services/pokedex');

describe('PokemonController', () => {
  describe('pokedex', () => {
    it('should return 200 with correct contents', (done) => {
      request(sails.hooks.http.app)
        .get('/pokemon')
        .expect(200)
        .expect(pokedex, done);
    });
  });

  // TODO: implement single pokemon endpoint and uncomment
  /*
  describe('single pokemon', () => {
    it('should return 200 with correct contents', (done) => {
      request(sails.hooks.http.app)
        .get('/pokemon/25')
        .expect(200)
        .expect({
            "pokemonId": 25,
            "name": "Pikachu",
            "type": "electric"
          }, done);
    });
  });
  */
});