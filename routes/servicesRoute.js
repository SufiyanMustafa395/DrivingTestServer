// routes/servicesRoute.js

const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// Function to verify if the authenticated user is an admin

/*const isAdmin = (req) => {
  const user = req.user;
  return user.email === 'admin@seneca.ca';
};
*/

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST create a new service
router.post('/', async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    /*if (!isAdmin(req)) {
      return res.status(403).json({ msg: 'Only admin can create services' });
    }*/

    const { title, description, price } = req.body;
    const service = new Service({ title, description, price });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT update an existing service
router.put('/:id', async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    /*if (!isAdmin(req)) {
      return res.status(403).json({ msg: 'Only admin can update services' });
    }*/

    const { id } = req.params;
    const { title, description, price } = req.body;
    const updatedService = await Service.findByIdAndUpdate(id, { title, description, price }, { new: true });
    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE delete an existing service
router.delete('/:id', async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    /*if (!isAdmin(req)) {
      return res.status(403).json({ msg: 'Only admin can delete services' });
    }*/

    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
