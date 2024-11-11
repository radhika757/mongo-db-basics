// Adding Custom Methods to our Schema 
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/category')
    .then(() => {
        console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log("OH NO ERROR", err);
    })


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: {
        type: Array,
    },
    products: {
        type: Array,
    }
})

const Category =  mongoose.model('Category', schema);
