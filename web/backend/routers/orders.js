const {Order} = require('../models/order');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const order_list = await Order.find()
    if(!order_list) res.status(500).json({success: false})
    res.send(order_list);
})


module.exports = router;
