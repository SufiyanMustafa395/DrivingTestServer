const express = require("express");
const Appointment = require("../models/appointment");
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Placeholder route for appointments

router.get("/", bookingController.getAppointment);
router.post("/", (req, res) => {
  console.log("Received data:", req.body);

  // Send a response back to the client
  res.status(200).json({ msg: "Data received" });
});

// You can add more placeholder routes or middleware as needed

module.exports = router;
