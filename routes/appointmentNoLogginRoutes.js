const express = require("express");
const AppointmentNoLoggin = require("../models/appointmentNoLoggin");
const router = express.Router();

router.get("/", async (req, res) => {
  const appointments = await AppointmentNoLoggin.find();
  res.json(appointments);
});

router.post("/", async (req, res) => {
  const { date, time, serviceType, customer, dog } = req.body;

  const existingAppointment = await AppointmentNoLoggin.findOne({
    customer,
    date,
    time,
  });
  if (existingAppointment) {
    return res
      .status(400)
      .send("You already have an appointment at this time.");
  }

  const newAppointment = new AppointmentNoLoggin({
    date,
    time,
    serviceType,
    customerInfo: customer,
    dog,
  });
  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await AppointmentNoLoggin.deleteMany({});
    res.status(200).json({ message: "All appointments deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
