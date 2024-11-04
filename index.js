const mongoose = require('mongoose');

// we are specificying where to find mongodb locally and the db.
mongoose.connect('mongodb://localhost:27017/moviesDB');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/moviesDB');
}