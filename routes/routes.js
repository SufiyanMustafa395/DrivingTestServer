//routes.js

const express = require('express');
const authRoutes = require('./authRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const customerRoutes = require('./customerRoutes');

const router = express.Router();

// Define a route handler for the root path
router.get('/', (req, res) => {
  res.send('Welcome to the root path!');
});

// Delegate specific functionalities to separate route files
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/customers', customerRoutes);

module.exports = router;

