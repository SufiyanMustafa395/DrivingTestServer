// routes/contactsRoute.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Include an array of objects, each representing a tile with text and an image
    const data = {
      contacts: {
        title: "Our Contact Information and Service Hours",
        contactInformation: "\n 123 Main St, Toronto, ON \n \n Phone: (123) 456-7890 \n \n Fax: (123) 123-123456 \n \n Email: info@example.com",
        workingHours: "\nMonday:  9 AM - 5 PM\n Tuesday:        9 AM - 5 PM\n Wednesday:    9 AM - 5 PM\n Thursday: 9 AM - 5 PM\n Friday: 9 AM - 5 PM \n Saturday: 10 AM - 3 PM \n Sunday: Closed",
      },
    };

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error handling contacts route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
