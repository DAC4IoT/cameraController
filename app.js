'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // For testing

var config = {
  appRoot: __dirname,
  swaggerSecurityHandlers: require('./api/helpers/security')
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) throw err;

  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});
