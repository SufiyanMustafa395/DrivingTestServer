// models/service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
<<<<<<< HEAD
=======
  title: { type: String, required: true },
>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
