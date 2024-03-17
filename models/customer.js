// models/customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
});
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
