const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                },
                quantity: {
                    type: Number,
                    require: true,
                },
            },
        ],
    }
)

exports.Cart = mongoose.model('Cart', cartSchema)
