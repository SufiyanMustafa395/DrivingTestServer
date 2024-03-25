const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// Middleware to parse JSON bodies
router.use(express.json());

// GET all feedback entries
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (error) {
    console.error('Error fetching feedback entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new feedback entry
router.post('/', async (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Check if all required fields are provided
    if (!rating || !comment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new feedback entry
    const feedback = new Feedback({ rating, comment });
    await feedback.save();

    // Return the saved feedback entry
    res.status(201).json(feedback);
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
