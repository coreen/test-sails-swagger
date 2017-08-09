/**
 * HealthcheckController
 *
 * @description :: Server-side logic for managing healthcheck endpoint
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const pkgjson = require('../../package.json');

module.exports = {
  healthcheck: function(req, res) {
    return res.ok({
       "health": "ok"
    });
    // TODO: make this actually measure service health
//    res.status(503);
//    return res.send({
//       "health": "bad"
//    });
  }
};
