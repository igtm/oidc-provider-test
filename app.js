// @see: https://www.scottbrady91.com/OpenID-Connect/Getting-Started-with-oidc-provider

const express = require('express');
const Provider = require('oidc-provider');

const app = express();

const clients = [{
    client_id: 'test_oauth_app',
    client_secret: 'super_secret',
    grant_types: ['client_credentials'],
    redirect_uris: [],
    response_types: [],
}];

const oidc = new Provider('http://localhost:3000', {
	features: {
    clientCredentials: true,
    introspection: true
  },
// By default, oidc-provider offers stub functionality for user authentication, suitable for test purposes only.
	async findById(ctx, id) {
	  return {
      accountId: id,
      async claims() { return { sub: id }; },
	  };
  }
});
oidc.initialize({clients}).then(function () {
	    app.use('/', oidc.callback);
      app.listen(3000);
});
