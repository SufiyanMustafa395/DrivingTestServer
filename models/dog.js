const mongoose = require("mongoose");

const dogProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
});

const Dog = mongoose.model("Dog", dogProfileSchema);

module.exports = Dog;
