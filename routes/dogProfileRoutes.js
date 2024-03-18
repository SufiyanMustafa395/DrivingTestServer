const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createDogProfile, updateDogProfile, deleteDogProfile } = require('../controllers/dogProfileController');

router.post('/dogprofile', authMiddleware, createDogProfile);
router.put('/dogprofile', authMiddleware, updateDogProfile);
router.delete('/dogprofile', authMiddleware, deleteDogProfile);

module.exports = router;
