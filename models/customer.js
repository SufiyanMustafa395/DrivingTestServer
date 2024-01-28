// models/customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  // Reference to the User model
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String },
  phone: { type: String },
  address: { type: String },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

