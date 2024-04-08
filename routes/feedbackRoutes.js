const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// Middleware to parse JSON bodies
router.use(express.json());

// GET all feedback entries
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedback entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new feedback entry
router.post('/', async (req, res) => {
  try {
    const { rating, comment, service } = req.body;

    // Check if all required fields are provided
    if (!rating || !comment || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new feedback entry
    const feedback = new Feedback({ rating, comment, service });
    await feedback.save();

    // Return the saved feedback entry
    res.status(201).json(feedback);
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT update an existing feedback entry
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment, service } = req.body;
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { rating, comment, service },
      { new: true }
    );
    if (!updatedFeedback) {
      return res.status(404).json({ error: 'Feedback entry not found' });
    }
    res.json(updatedFeedback);
  } catch (error) {
    console.error('Error updating feedback entry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE delete an existing feedback entry
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback) {
      return res.status(404).json({ error: 'Feedback entry not found' });
    }
    res.json({ message: 'Feedback entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting feedback entry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
