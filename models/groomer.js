// models/groomer.js
const mongoose = require('mongoose');

const groomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Groomer = mongoose.model('Groomer', groomerSchema);

module.exports = Groomer;
