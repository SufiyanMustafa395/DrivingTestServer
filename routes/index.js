const express = require('express');
const authRoutes = require('./authRoutes');
const customerRoutes = require('./customerRoutes');
<<<<<<< HEAD
const dogProfileRoutes = require('./dogProfileRoutes');
=======

>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);
<<<<<<< HEAD
router.use('/dog-profile', dogProfileRoutes);
=======
>>>>>>> 8f90d3e8a241a764305db79c4bcdb84a70c8b8a6

module.exports = router;
