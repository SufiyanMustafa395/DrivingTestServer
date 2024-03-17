<<<<<<< HEAD
// routes/routes.js
=======
//routes/routes.js
>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6

const express = require('express');
const authRoutes = require('./authRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const customerRoutes = require('./customerRoutes');
const aboutRoute = require('./aboutRoute'); // Import the aboutRoute module
const servicesRoute = require('./servicesRoute'); // Import the servicesRoute module
const contactsRoute = require('./contactsRoute'); // Import the contactsRoute module
const homeRoute = require('./homeRoute'); // Import the homeRoute module
<<<<<<< HEAD
const dogProfileRoutes = require('./dogProfileRoutes'); // Import the dogProfileRoutes module

const router = express.Router();

=======


const router = express.Router();

/*
// Define a route handler for the root path
router.get('/', (req, res) => {
  res.send('Welcome to the root path!');
});
*/

>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
// Delegate specific functionalities to separate route files
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/customers', customerRoutes);
<<<<<<< HEAD
router.use('/dog-profile', dogProfileRoutes); 
=======
>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
// Include the about route
router.use('/about', aboutRoute);
router.use('/services', servicesRoute); // Include the services route
// Include the contacts route
router.use('/contacts', contactsRoute);
// Include the home route
router.use('/', homeRoute);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;

>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
