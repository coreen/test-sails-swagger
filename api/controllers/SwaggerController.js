const apiDocs = require('../swagger/api-docs');

module.exports = {
  swaggerDef: (req, res) => { return res.ok(apiDocs); }
};