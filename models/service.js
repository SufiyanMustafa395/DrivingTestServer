// models/service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
