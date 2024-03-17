// dogprofileroutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { updateDogProfile } = require('../controllers/authController');

// Route to update the dog profile
router.put('/dogprofile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user ? req.user.userId : null; // Check if req.user is defined
    if (!userId) {
      return res.status(401).json({ msg: 'User not authenticated' });
    }
    const dogProfileData = req.body; // Get the updated dog profile data from the request body
    const result = await updateDogProfile(userId, dogProfileData);
    res.json(result);
  } catch (error) {
    console.error('Error updating dog profile:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

module.exports = router;
