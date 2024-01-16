// express GWT protect api in server
// npm i express-jwt

const expressJwt = require('express-jwt')

function auth_jwt() {
    const secret = process.env.secret ? process.env.secret : 'web-app-ecommerce';
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        // thuật toán mã hóa
        algorithms: ['HS256']
    }).unless({
        path: [
            {url: `${api}/products`, methods: ['GET', 'OPTIONS']}
        ]
    })
}

module.exports = auth_jwt;