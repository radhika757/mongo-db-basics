const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp2')
    .then(() => {
        console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log("OH NO ERROR", err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        min: [100, 'Price must be more then 100 rupees!']
    },
    isOnSale: {
        type: Boolean,
        default: true
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'KTM', price: 20000, isOnSale: false });
bike.save();

const car = new Product({ name: 'BMW', price: 10000000, isOnSale: true });
car.save();