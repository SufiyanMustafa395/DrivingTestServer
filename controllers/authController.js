// authController.js

const bcrypt = require('bcrypt');
const { User, Customer, Dog } = require('../mongodb'); // Ensure correct import path for Dog model
const jwt = require('jsonwebtoken');

// Your secret key for signing and verifying JWT
const secretKey = 'yourSecretKey';

// Function to handle user registration
const registerUser = async (email, password, dogProfileData) => {
  try {
    console.log('Attempting to register user:', { email, password });
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { success: false, message: 'Email is already registered' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({ email, password: hashedPassword });

    // Create a customer with the new user's ID
    await Customer.create({ user: newUser._id });

    // Create dog profile for the user
    await Dog.create({ owner: newUser._id, ...dogProfileData }); // Ensure correct usage of Dog model

    return { success: true, user: newUser };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Internal Server Error' };
  }
};

// Function to update dog profile
const updateDogProfile = async (userId, dogProfileData) => {
  try {
    console.log('Attempting to update dog profile for user:', userId);
    // Find the dog profile associated with the user
    const updatedDogProfile = await Dog.findOneAndUpdate(
      { owner: userId }, // Filter by owner ID
      dogProfileData, // Update with request body
      { new: true } // Return the updated document
    );

    if (!updatedDogProfile) {
      return { success: false, message: 'Dog profile not found' };
    }

    return { success: true, message: 'Dog profile updated successfully' };
  } catch (error) {
    console.error('Error updating dog profile:', error);
    return { success: false, message: 'Internal Server Error' };
  }
};

// Function to check if the user is authenticated
const checkAuth = async (req, res) => {
  try {
    // Get the user from the request object
    const user = req.user;

    if (!user) {
      return res.status(401).json({ msg: 'User not authenticated' });
    }

    // If the user is authenticated, you can send additional user details if needed
    res.json({ user: { email: user.email /* add other user details if needed */ } });
  } catch (error) {
    console.error('Error checking authentication:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  updateDogProfile,
  checkAuth,
  // ... other exported functions
};

