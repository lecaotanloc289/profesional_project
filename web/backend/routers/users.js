const { User } = require('../models/user')
const { Product } = require('../models/product')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// get all user
router.get(`/`, async (req, res) => {
    user_list = await User.find().select('-password_hash')
    // example (name, phone, email)
    if (!user_list) return res.send(500).json({ success: false })
    res.send(user_list)
})

// get a user by id
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password_hash')
    if (!user) return res.status(500).json({ success: false })
    res.send(user)
})

// Post | register a new user
router.post('/', async (req, res) => {
    const email = await User.findOne({ email: req.body.email })
    if (!email) return res.status(400).send('The user not found!')

    if (!req.body.password_hash) {
        return res
            .status(400)
            .send('Bad Request: req.body.password_hash is missing.')
    }
    if (typeof req.body.password_hash === 'undefined') {
        return res
            .status(400)
            .send('Bad Request: req.body.password_hash is undefined.')
    }

    let user = new User(
        {
            _id: req.body.id,
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            password_hash: bcrypt.hashSync(req.body.password_hash, 10),
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            is_admin: req.body.is_admin,
            likedProducts: req.body.likedProducts,
        },
        {
            new: true,
        },
    )
    user = await user.save()

    if (!user) return res.status(400).send('The user do not created!')
    res.send(user)
})

// login with email & password
router.post('/signin', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    const secret = process.env.serect ? process.env.secret : 'web-app-ecommerce'

    if (!user) return res.status(400).send('The user not found!')
    if (
        user &&
        bcrypt.compareSync(req.body.password_hash, user.password_hash)
    ) {
        const token = jwt.sign(
            {
                user_id: user.id,
                is_admin: user.is_admin,
            },
            secret,
            // time for token
            { expiresIn: '1d' },
        )
        res.status(200).send({
            message: 'Login Sucessful',
            user: user.email,
            id: user.id,
            token: token,
            name: user.name,
            gender: user.gender,
            email: user.email,
            street: user.street,
            apartment: user.apartment,
            city: user.city,
            zip: user.zip,
            country: user.country,
            phone: user.phone,
            likedProducts: user.likedProducts,
        })
    } else res.status(400).send('Password is not correct!')
})

// count user
router.get('/get/count', async (req, res) => {
    // count in this table
    const userCount = await User.countDocuments()
    if (!userCount) res.status(500).json({ success: false })
    res.send({
        userCount: userCount,
    })
})

// delete user by id
router.delete('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid user id!')
    }
    User.findOneAndDelete(req.params.id)
        .then((user) => {
            if (user)
                return res
                    .status(200)
                    .json({ success: true, message: 'The user is deleted!' })
            else
                return res
                    .status(404)
                    .json({ success: false, message: 'User is not found!' })
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err })
        })
})

// update password by user id
router.put('/changepassword', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid product id!')
    }
    // check category before update
    const category = await Category.findById(req.body.category)
    if (!category) return res.status(400).send('Invalid category')
    let product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            gender: req.body.gender,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numberReviews: req.body.numberReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true },
    )

    if (!product) return res.status(500).send('The product cannot be updated!')
    res.send(product)
})

// add | remove favorite product to favorite product list
router.put('/favorite/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params
    try {
        const user = await User.findById(userId)
        const product = await Product.findById(productId)
        if (!user || !product)
            return res
                .status(404)
                .json({ message: 'User or product not found' })

        const index = user.likedProducts.indexOf(product._id)
        if (index === -1) {
            user.likedProducts.push(product._id)
            res.status(200).json({
                message: 'Product added in favorite list!',
            })
        } else {
            user.likedProducts.splice(index, 1)
            res.status(200).json({
                message: 'Product removed in favorite list!',
            })
        }

        await user.save()
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', err })
    }
})

module.exports = router
