const bcrypt = require('bcrypt');
const { User, Customer } = require('../mongodb');

// Function to handle user registration
const registerUser = async (email, password) => {
  try {
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

module.exports = {
  registerUser,
};
