const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
});

const productModel = mongoose.model("products",productSchema);
module.exports = productModel;