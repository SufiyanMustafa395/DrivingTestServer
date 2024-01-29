// authController.js
const bcrypt = require('bcrypt');
const { User, Customer } = require('../mongodb');
const jwt = require('jsonwebtoken');

// Your secret key for signing and verifying JWT
const secretKey = 'yourSecretKey';

// Function to handle user registration
const registerUser = async (email, password) => {
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

    return { success: true, user: newUser };
  } catch (error) {
    console.error('Error registering user:', error);
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
  checkAuth,
  // ... other exported functions
};
