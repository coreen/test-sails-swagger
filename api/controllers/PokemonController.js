/**
 * PokemonController
 *
 * @description :: Server-side logic for managing pokemon
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const pokedex = require('../services/pokedex');

module.exports = {
    find: function(req, res) {
        return res.ok(pokedex);
    },
    findOne: function(req, res) {
        // TODO: prepopulate Pokemon model with pokedex json values, so can query by pid 
        let pid = req.params.pokemonId;
        Pokemon.findOne({
          pokemonId: pid
        }).exec(function(err, pokemon) {
          if (err)
            return res.serverError(err);

          if (pokemon === undefined) {
            console.log('ERROR: entry not found for pokemonId', pid);
            return res.badRequest(err);
          }

          return res.ok(pokemon);
        });
    }
};
