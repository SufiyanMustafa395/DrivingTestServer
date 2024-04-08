const express = require("express");
const authRoutes = require("./authRoutes");
const customerRoutes = require("./customerRoutes");
const dogProfileRoutes = require("./dogProfileRoutes");
const appoinmentRoutes = require("./appointmentRoutes");
const paymentRoutes = require("./paymentRoute");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/customers", customerRoutes);
router.use("appointments", appoinmentRoutes);
router.use("/dog-profile", dogProfileRoutes);
router.use("/payments", paymentRoutes);
module.exports = router;
