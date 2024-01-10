const {User} = require('../models/user')
const express = require('express')
const router = express.Router()

router.get(`/`, async(req, res) => {
    user_list = await User.find()
    if(!user_list) res.send(500).json({success: false})
    res.send(user_list)
})


module.exports = router;
