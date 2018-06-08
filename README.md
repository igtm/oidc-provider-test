# OIDCのテスト
https://www.scottbrady91.com/OpenID-Connect/Getting-Started-with-oidc-provider

## Usage
```
yarn

app node.js

open "http://localhost:3000/auth?client_id=test_implicit_app&redirect_uri=https://testapp/signin-oidc&response_type=id_token&scope=openid%20profile&nonce=123&state=321"
```
