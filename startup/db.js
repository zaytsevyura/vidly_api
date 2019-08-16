const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log(`Connected to ${db}...`))
}