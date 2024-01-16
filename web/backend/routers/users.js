const {User} = require('../models/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// get all user
router.get(`/`, async(req, res) => {
    user_list = await User.find().select('-password_hash')
    if(!user_list) return res.send(500).json({success: false})
    res.send(user_list)
})

// get a user by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password_hash');
    if(!user) return res.status(500).json({success: false})
    res.send(user);
})

// add a new user
router.post('/', async(req, res) => {
    if (!req.body.password_hash) {
        return res.status(400).send("Bad Request: req.body.password_hash is missing.");
    }
    if (typeof req.body.password_hash === 'undefined') {
        return res.status(400).send("Bad Request: req.body.password_hash is undefined.");
    }
    
    let user = new User({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password_hash: bcrypt.hashSync(req.body.password_hash, 10),
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        is_admin: req.body.is_admin,
    }, {
        new: true
    })
    user = await user.save();

    if(!user) return res.status(400).send('The user do not created!')
    res.send(user);
})

// login with email & password
router.post('/:login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    var secret = process.env.serect ? process.env.secret : 'web-app-ecommerce';
    if(!user) return res.status(400).send("The user not found!");
    if(user && bcrypt.compareSync(req.body.password_hash, user.password_hash)){
        // using json web token with id
        const token = jwt.sign(
            {
                user_id: user.id
            }, 

            // // using secrect key
            secret, 

            // // using limit time for jwt
            // {
            //     expiresIn: '1d' // 1d - 1 day, 1w - 1 week
            // }
            
        )
        res.status(200).send({user: user.email, token: token})
    }
    else res.status(400).send('Password is not correct!')
})    

// update password


module.exports = router;
