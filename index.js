const mongoose = require('mongoose');

// we are specificying where to find mongodb locally and the db.
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('CONNECTION OPEN');
})
