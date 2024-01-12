// express GWT protect api in server
// npm i express-jwt

const expressJwt = require('express-jwt')

function auth_jwt() {
    const secret = process.env.secret;
    return expressJwt({
        secret,
        algorithms: ['HS256']
    })
}

module.exports = auth_jwt;