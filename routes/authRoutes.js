// authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, checkAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
// authRoutes.js

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  console.log('Received registration request:', { email, password });

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const registrationResult = await registerUser(email, password);

  console.log('Registration result:', registrationResult);

  if (registrationResult.success) {
    res.status(201).json({ success: true, user: registrationResult.user });
  } else {
    res.status(500).json({ success: false, message: registrationResult.message });
  }
});



// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const loginResult = await loginUser(email, password);

  if (loginResult.success) {
    // Include user details in the response along with the token
    res.status(200).json({ success: true, user: loginResult.user, token: loginResult.token });
  } else {
    res.status(401).json({ success: false, message: loginResult.message });
  }
});

// Route for checking user authentication status
router.get('/check', authMiddleware, async (req, res) => {
  // If the middleware passes, the user is authenticated
  res.status(200).json({ success: true, user: req.user });
});

module.exports = router;
