/**
 * Pokemon.js
 *
 * @description :: Model for pokemon entries.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
      pokemonId: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          required: true
      },
      name: {
          type: 'string',
          required: true
      },
      type: {
          type: 'string',
          enum: ['grass', 'fire', 'water', 'electric', 'ground', 'normal', 'psychic', 'ghost', 'fighting', 'ice']
      }
  }
};
