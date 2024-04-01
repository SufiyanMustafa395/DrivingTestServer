// models/appointment.js
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  serviceType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
