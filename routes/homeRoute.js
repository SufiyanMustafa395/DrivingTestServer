// routes/homeRoute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    // Fetch data for the home page
    const data = {
      title: "Special Discount!",
      message: "Limited-time offer: Get 10% off on all grooming services booked on next Monday!",
    };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling home route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
