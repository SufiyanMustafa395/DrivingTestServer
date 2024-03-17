// passwordRoute.js

const express = require('express');
const router = express.Router();
const { changePassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for changing password
router.post('/', async (req, res) => { // Remove 'password' from the route path
  const { email, newPassword } = req.body;

  try {
    const result = await changePassword(email, newPassword);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
