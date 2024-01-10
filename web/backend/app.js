const express = require('express');
const app = express();
const body_parser = require('body-parser'); // sử dụng để chuyển dữ liệu nhận được => Json
const morgan = require('morgan'); // ghi nhật ký các yêu cầu http từ UI
// mongoose - thư viện kết nối mongodb
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.options('*', cors())
require('dotenv/config');

// middleware
app.use(body_parser.json());
app.use(morgan('tiny'));


// Routers
const product_router = require('./routers/products')
const category_router = require('./routers/categories')
const order_router = require('./routers/orders')
const user_router = require('./routers/users')

const api = process.env.API_URL;

app.use(`${api}/products`, product_router)
app.use(`${api}/users`, user_router)
app.use(`${api}/orders`, order_router)
app.use(`${api}/categories`, category_router)


// mongodb connect
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'ecommerce'
})
.then(() => {
    console.log('Database connection is ready');
})
.catch ((err) => {
    console.log(err);
});


app.listen(2000, () => {
    console.log('server in running http://localhost:2000/api/v1/products')
})