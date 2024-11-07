const mongoose = require('mongoose');

// we are specificying where to find mongodb locally and the db.
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
  .then(() => {
    console.log('CONNECTION OPEN')
  })
  .catch(err => {
    console.log("OH NO ERROR", err);
  })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('CONNECTION OPEN');
// })

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
  score: Number
})
const Movie = mongoose.model('Movie', movieSchema); // mongo will create a collection called movies.
const stree = new Movie({title: 'Stree', year: 2020, rating: '4', score: 9.5});
stree.save();

Movie.insertMany([
{title: 'Stree2', year: 2024, rating: '5', score: 10},
{title: '3 Idiots', year: 2011, rating: '4', score: 9},
{title: 'Hridyam', year: 2022, rating: '4', score: 9.2}
])
.then(data =>{
  console.log('IT WORKS');
  console.log(data);
})
.catch(error =>{
  console.log('OOPS!')
  console.log(error);
  
})

Movie.find({}).then(data => console.log(data));

