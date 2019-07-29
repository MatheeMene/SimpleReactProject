const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({

  title: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Note', Note);
