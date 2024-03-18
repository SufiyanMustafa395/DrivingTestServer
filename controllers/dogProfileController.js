// dogProfileController.js

const Dog = require('../models/dog');

const createDogProfile = async (req, res) => {
  try {
    const { name, breed, age, weight, aggressionStatus, lastVisitDate } = req.body;
    const newDogProfile = await Dog.create({
      owner: req.user._id,
      name,
      breed,
      age,
      weight,
      aggressionStatus,
      lastVisitDate,
    });
    res.status(201).json(newDogProfile);
  } catch (error) {
    console.error('Error creating dog profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateDogProfile = async (req, res) => {
  try {
    const { name, breed, age, weight, aggressionStatus, lastVisitDate } = req.body;
    const updatedDogProfile = await Dog.findOneAndUpdate(
      { owner: req.user._id },
      { name, breed, age, weight, aggressionStatus, lastVisitDate },
      { new: true }
    );
    res.json(updatedDogProfile);
  } catch (error) {
    console.error('Error updating dog profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteDogProfile = async (req, res) => {
  try {
    await Dog.findOneAndDelete({ owner: req.user._id });
    res.json({ message: 'Dog profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting dog profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const fetchDogProfile = async (req, res) => {
  try {
    // Fetch dog profile associated with the current user
    const dogProfile = await Dog.findOne({ owner: req.user._id });
    if (!dogProfile) {
      return res.status(404).json({ message: 'Dog profile not found' });
    }
    res.json(dogProfile);
  } catch (error) {
    console.error('Error fetching dog profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createDogProfile,
  updateDogProfile,
  deleteDogProfile,
  fetchDogProfile,
};
