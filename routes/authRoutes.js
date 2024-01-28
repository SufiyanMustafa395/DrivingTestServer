//authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Route for user registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const registrationResult = await registerUser(email, password);

  if (registrationResult.success) {
    res.status(201).json({ success: true, user: registrationResult.user });
  } else {
    res.status(500).json({ success: false, message: registrationResult.message });
  }
});

module.exports = router;
