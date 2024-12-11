const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 5
    },
    category: {
        type: String,
        // enum is the array that creates a validator that checks if the value is in the given array. 
        enum: ['fruit', 'vegetable', 'dairy'],
        lowercase: true
    }
})

const Product = mongoose.model('Product', schema);

module.exports = Product;