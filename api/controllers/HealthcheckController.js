/**
 * HealthcheckController
 *
 * @description :: Server-side logic for managing healthcheck endpoint
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const pkgjson = require('../../package.json');

module.exports = {
  healthcheck: function(req, res) {
    // app is healthy if pokedex load successful
    Pokemon.find({}).exec(function(err, something) {
        if (something.length) {
            return res.ok({
               "health": "ok"
            });
        } else {
           res.status(503);
           return res.send({
              "health": "bad"
           });
        }
    });
  }
};
