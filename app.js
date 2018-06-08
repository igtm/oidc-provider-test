// @see: https://www.scottbrady91.com/OpenID-Connect/Getting-Started-with-oidc-provider

const express = require('express');
const Provider = require('oidc-provider');

const app = express();

const clients = [{
    client_id: 'test_implicit_app',
    grant_types: ['implicit'],
    response_types: ['id_token'],
    redirect_uris: ['https://testapp/signin-oidc'],
    token_endpoint_auth_method: 'none'
}];

const oidc = new Provider('http://localhost:3000', {
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
