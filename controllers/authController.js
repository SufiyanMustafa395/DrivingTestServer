const bcrypt = require('bcrypt');
const { User } = require('../mongodb'); // Ensure correct import path for User model
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

// Function to handle password change
const changePassword = async (email, newPassword) => {
  try {
    console.log('Attempting to change password:', { email });

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash the password

    // Update the user's password
    await User.updateOne({ email }, { password: hashedPassword }); // Update the password in the database

    return { success: true, message: 'Password changed successfully' };
  } catch (error) {
    console.error('Error changing password:', error);
    return { success: false, message: 'Internal Server Error' };
  }
};

// Function to handle user login
const loginUser = async (email, password) => {
  try {
    console.log('Attempting to log in user:', { email, password });

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: 'Email not found' };
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: 'Invalid password' };
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });

    return { success: true, user, token };
  } catch (error) {
    console.error('Error logging in user:', error);
    return { success: false, message: 'Internal Server Error' };
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkAuth,
  changePassword, // Add the changePassword function to the exported module
  // ... other exported functions
};
