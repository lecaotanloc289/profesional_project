import { Schema, model } from "mongoose";

const user_schema = new Schema({
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
        require: true,
    },
    apartment: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    zip: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    phone: {
        type: Number,
        default: "",
    },
    is_admin: {
        type: Boolean,
        default: false,
    },
});

user_schema.virtual("id").get(function () {
    return this._id.toHexString();
});

user_schema.set("toJSON", {
    virtuals: true,
});

export const User = model("User", user_schema);
exports.user_schema = user_schema;
