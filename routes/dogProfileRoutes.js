const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

// GET all dog profiles
router.get('/', async (req, res) => {
  try {
    const dogProfiles = await Dog.find();
    res.status(200).json(dogProfiles);
  } catch (error) {
    console.error('Error fetching dog profiles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST create a new dog profile
router.post('/', async (req, res) => {
  try {
    const { name, breed, age } = req.body;
    const dogProfile = new Dog({ name, breed, age });
    await dogProfile.save();
    res.status(201).json(dogProfile);
  } catch (error) {
    console.error('Error creating dog profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT update an existing dog profile
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, breed, age } = req.body;
    const updatedDogProfile = await Dog.findByIdAndUpdate(
      id,
      { name, breed, age },
      { new: true }
    );
    if (!updatedDogProfile) {
      return res.status(404).json({ error: 'Dog profile not found' });
    }
    res.json(updatedDogProfile);
  } catch (error) {
    console.error('Error updating dog profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE delete an existing dog profile
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDogProfile = await Dog.findByIdAndDelete(id);
    if (!deletedDogProfile) {
      return res.status(404).json({ error: 'Dog profile not found' });
    }
    res.json({ message: 'Dog profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting dog profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
