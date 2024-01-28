// customerRoutes.js

const express = require('express');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect the routes using authentication middleware
router.use(authMiddleware);

router.get('/profile', customerController.getProfile);
router.put('/profile', customerController.updateProfile);

module.exports = router;
