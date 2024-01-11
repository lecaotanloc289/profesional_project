// Tạo, Lưu trữ API và nhập xuất giữa các file
const {Product} = require('../models/product');
const {Category} = require('../models/category');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

   // get all product || by category
router.get(`/` , async (req, res) => {
    let filter = {};
    filter = {category: req.query.categories.split(',')}
    const products = await Product.find(filter).populate('category');
    if(!products) res.status(500).json({success: false})
    res.send(products)
})

    // get a product by id and show category details
router.get('/:id',async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');
    if(!product) return res.status(500).json({success: false})
    res.send(product)
})

    // post a product
router.post(`/` , async (req, res) => {
    // Xác thực xem category có tồn tại hay không trước khi gửi request
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid category');

    // Let, not const
    let product = new Product({
        _id: req.body.id,
        name: req.body.name,
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
    {
        new: true,
    })
    new_product = await product.save();
    if(!new_product) return res.status(500).send('The product cannot be created!');

    res.send(new_product);
})

    // update product by id
router.put('/:id', async (req, res,) => {
        // check id before update
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid product id!');
    }
        // check category before update
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid category')
    let product = await Product.findByIdAndUpdate(
        req.params.id, 
        {
            name: req.body.name,
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
        {new: true}
        )

        if(!product) return res.status(500).send('The product cannot be updated!');
        res.send(product);
})

    // delete product by id
router.delete('/:id', async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).send('Invalid product id!');
    }
    Product.findOneAndDelete(req.params.id).then(product => {
        if(product) return res.status(200).json({success: true, message: 'The product is deleted!'})
        else return res.status(404).json({success: false, message: 'Product is not found!'})
    }).catch(err => {
        return res.status(500).json({success: false, error: err})
    })
})

    // count product
router.get('/get/count', async (req, res) => {
        // count in this table
    const product_count = await Product.countDocuments()
    if(!product_count) res.status(500).json({success: false})
    res.send({
        product_count: product_count,
    })
})

    // get special product on main home page
router.get('/get/featured/:count', async (req, res) => {
    const count = req.params.count ? req.params.count : 0;
    const featured_products = await Product.find({isFeatured: true}).limit(+count)
    if(!featured_products) res.status(500).json({success: false})
    res.send(featured_products)
})

 

module.exports = router;