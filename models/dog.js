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
