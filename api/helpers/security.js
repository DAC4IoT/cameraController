module.exports = {
  OAuth2: function failure(req, authOrSecDef, scopesOrApiKey, cb) {
   cb(new Error("Not implemented yet"))
 },

 Basic: function failure(req, authOrSecDef, scopesOrApiKey, cb) {
   var prefix = 'Basic ';
   if (!req.headers.authorization || !req.headers.authorization.startsWith(prefix)) {
     cb(new Error("Wrong header for basic authentification"));
   } else {
     if(req.headers.authorization.substr(prefix.length) != 'YWRtaW46YWRtaW4=') {
       cb(new Error("Wrong username or password"));
     } else {
       cb.apply();
     }
   }
 }
};
