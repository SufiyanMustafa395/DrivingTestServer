// models/dog.js
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  weight: { type: Number },
  breed: { type: String },
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
