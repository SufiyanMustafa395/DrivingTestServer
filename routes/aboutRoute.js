// routes/aboutRoute.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetch data for the about page
    const data = { /* your data here */ };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling about route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
