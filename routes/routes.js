//routes.js

const express = require('express');
const authRoutes = require('./authRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const customerRoutes = require('./customerRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/customers', customerRoutes);

module.exports = router;

