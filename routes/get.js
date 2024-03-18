const express = require('express');
const router = express.Router();
const { User, Customer, Service, Dog } = require('../mongodb');

// Define route for the home page
router.get('/', async (req, res) => {
  try {
    // Fetch data for the home page (you can replace this with actual logic)
    const users = await User.find();
    const customers = await Customer.find();

    res.send(`Home Page\nUsers: ${JSON.stringify(users)}\nCustomers: ${JSON.stringify(customers)}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define route for services
router.get('/services', async (req, res) => {
  try {
    // Fetch data for services (you can replace this with actual logic)
    const services = await Service.find();
    
    res.send(`Services Page\nServices: ${JSON.stringify(services)}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define route for dog profiles
router.get('/dogprofile', async (req, res) => {
  try {
    // Fetch dog profiles from the database
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    console.error('Error fetching dog profiles:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

// Define route for contact information
router.get('/contact', async (req, res) => {
  try {
    // Fetch contact information (you can replace this with actual logic)
    const contacts = await Customer.find({}, 'name email phone address');
    
    res.send(`Contact Page\nContacts: ${JSON.stringify(contacts)}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
