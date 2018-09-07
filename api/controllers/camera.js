'use strict';

var util = require('util'); // Import util module to consume the things that it exports

module.exports = {
  livestream: livestream
};

function livestream(req, res) {
  res.json(util.format('%s', "Not implemented yet"));
}
