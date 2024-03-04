const mongoose = require('mongoose')

// Schema
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password_hash: {
        type: String,
        require: true,
    },
    street: {
        type: String,
        default: '',
    },
    apartment: {
        type: String,
        default: '',
    },
    city: {
        type: String,
        default: '',
    },
    zip: {
        type: String,
        default: '',
    },
    country: {
        type: String,
        default: '',
    },
    phone: {
        type: Number,
        require: true,
    },
    is_admin: {
        type: Boolean,
        default: false,
    },
    likedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

// using to get id, not _id
user_schema.virtual('id').get(function () {
    return this._id.toHexString()
})

user_schema.set('toJSON', {
    virtuals: true,
})

exports.User = mongoose.model('User', user_schema)
exports.user_schema = user_schema
