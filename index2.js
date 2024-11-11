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