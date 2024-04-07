// models/appointment.js
const mongoose = require("mongoose");

const appointmentNoLogSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  serviceType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  customerInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  dog: { type: mongoose.Schema.Types.ObjectId, ref: "Dog" },
});

const AppointmentNoLoggin = mongoose.model(
  "AppointmentNoLog",
  appointmentNoLogSchema
);

module.exports = AppointmentNoLoggin;
