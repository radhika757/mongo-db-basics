// CRUD using Mongoose
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR", err);
    })

// EJS - render views (HTML templates) using templating language engine. 
// Views Directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.listen(3001, () => {
    console.log('PORT running on 3001')
})

app.get('/products', async (req, res) => {
    // this usually returns a promise. We can either use '.then' or async await 
    const products = await Product.find({});

    // res.status(200).json({ message: 'ALL PRODUCTS!', products });
    res.render('products/index', { products });
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

// Display single product 
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    // Product.findOne({ _id: id })
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
   const updatedProducts = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${updatedProducts._id}`)
})