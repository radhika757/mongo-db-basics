const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
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
    required: true,
    min: 50
  },
  onSale:{
    type: Boolean,
    default: true
  }
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({ name: 'Mountain Bike', price: 1999 });
bike.save()
  .then(data => {
    console.log('IT WORKED', data);
  })
  .catch(err =>
    console.log("Error!", err)
  )