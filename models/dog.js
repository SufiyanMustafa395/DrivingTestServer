<<<<<<< HEAD
const mongoose = require("mongoose");

const dogProfileSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  aggressionStatus: { type: String, required: true },
  lastVisitDate: { type: Date, required: true },
});

const Dog = mongoose.model("Dog", dogProfileSchema);

module.exports = Dog;
=======
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
>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
