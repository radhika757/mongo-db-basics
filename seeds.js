// to give some initial data to the db.
// run this file when you want some new data in the db.
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR", err);
    })

// const p = new Product({
//     name: 'Red Grapes',
//     price: 10,
//     category: 'fruit'
// })

// p.save();

const seedProducts = [
    {
        name: 'Pineapple',
        price: 15,
        category: 'fruit'
    },
    {
        name: 'Tomato',
        price: 9,
        category: 'vegetable'
    },
    {
        name: 'Cheese',
        price: 25,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts) // If anything does not pass the validation then nothing will be inserted.