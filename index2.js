const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR", err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3001, () => {
    console.log('PORT running on 3001')
})

app.get('/product', async (req, res) => {
    // this usually returns a promise. We can either use '.then' or async await 
    const products = await Product.find({});
    console.log(products);
    
    // res.status(200).json({ message: 'ALL PRODUCTS!', products });
    res.render('products/index');
})