const express = require('express');
const authRoutes = require('./authRoutes');
const customerRoutes = require('./customerRoutes');
const dogProfileRoutes = require('./dogProfileRoutes');
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);
router.use('/dog-profile', dogProfileRoutes);
module.exports = router;