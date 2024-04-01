const express = require("express");
const Appointment = require("../models/appointment");
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Placeholder route for appointments

router.get("/", bookingController.getAllAppointments);
router.post("/", bookingController.createAppointment);
router.delete("/:id", bookingController.deleteAppointment);
router.put("/:id", bookingController.updateAppointment);
// You can add more placeholder routes or middleware as needed

module.exports = router;
