//routes/routes.js

const express = require('express');
const authRoutes = require('./authRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const customerRoutes = require('./customerRoutes');
const aboutRoute = require('./aboutRoute'); // Import the aboutRoute module
const servicesRoute = require('./servicesRoute'); // Import the servicesRoute module
const contactsRoute = require('./contactsRoute'); // Import the contactsRoute module
const homeRoute = require('./homeRoute'); // Import the homeRoute module
const dogProfileRoutes = require('./dogProfileRoutes'); // Import the dogProfileRoutes module
const feedbackRoutes = require('./feedbackRoutes'); // Import the dogProfileRoutes module
const passwordRoute = require('./passwordRoute'); // Import the homeRoute module
const router = express.Router();

// Delegate specific functionalities to separate route files
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/feeback', feedbackRoutes);
router.use('/customers', customerRoutes);
router.use('/dogprofile', dogProfileRoutes); 
// Include the about route
router.use('/about', aboutRoute);
router.use('/services', servicesRoute); // Include the services route
// Include the contacts route
router.use('/contacts', contactsRoute);
 // Include the password route
router.use('/password', passwordRoute);
// Include the home route
router.use('/', homeRoute);

module.exports = router;

