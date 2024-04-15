// adminAppRoutes.js

const express = require('express');
const router = express.Router();
const AdminApp = require('../models/appointment');
const Customer = require('../models/customer');
const User = require('../models/user');

// Function to verify if the authenticated user is an admin

/*const isAdmin = (req) => {
  const user = req.user;
  return user.email === 'admin@seneca.ca';
};
*/

// GET all admin apps with associated customer and user details
router.get('/', async (req, res) => {
    try {
      // Fetch all admin apps
      const adminApps = await AdminApp.find();
  
      // Array to store admin apps with associated customer and user details
      const adminAppsWithDetails = [];
  
      // Iterate through each admin app and fetch its associated customer and user details
      for (const adminApp of adminApps) {
        const customer = await Customer.findById(adminApp.customer);
        const user = await User.findById(customer.user).select('-password'); // Exclude the password field
        if (customer && user) {
          // Combine admin app, customer, and user details and push to the array
          adminAppsWithDetails.push({
            adminApp,
            customer: {
              ...customer.toObject(), // Convert Mongoose document to plain object
              user: user.toObject() // Convert Mongoose document to plain object
            }
          });
        }
      }
  
      res.status(200).json(adminAppsWithDetails);
    } catch (error) {
      console.error('Error fetching admin apps:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  

// POST create a new admin app
router.post('/', async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    /*if (!isAdmin(req)) {
      return res.status(403).json({ msg: 'Only admin can create admin apps' });
    }*/

    const { title, description, price } = req.body;
    const adminApp = new AdminApp({ title, description, price });
    await adminApp.save();
    res.status(201).json(adminApp);
  } catch (error) {
    console.error('Error creating admin app:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// PUT update an existing admin app
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time } = req.body;
    const updatedAdminApp = await AdminApp.findByIdAndUpdate(id, { date, time }, { new: true });
    if (!updatedAdminApp) {
      return res.status(404).json({ error: 'Admin app not found' });
    }
    res.json(updatedAdminApp);
  } catch (error) {
    console.error('Error updating admin app:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// DELETE delete an existing admin app
router.delete('/:id', async (req, res) => {
  try {
    // Check if the authenticated user is an admin
    /*if (!isAdmin(req)) {
      return res.status(403).json({ msg: 'Only admin can delete admin apps' });
    }*/

    const { id } = req.params;
    const deletedAdminApp = await AdminApp.findByIdAndDelete(id);
    if (!deletedAdminApp) {
      return res.status(404).json({ error: 'Admin app not found' });
    }
    res.json({ message: 'Admin app deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin app:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a specific admin app by ID
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const adminApp = await AdminApp.findById(id);
      if (!adminApp) {
        return res.status(404).json({ error: 'Admin app not found' });
      }
  
      // Fetch customer details using the customer ID
      const customer = await Customer.findById(adminApp.customer);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
  
      // Fetch user details using the customer's user ID
      const user = await User.findById(customer.user).select('-password'); // Exclude the password field
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Combine admin app, customer, and user details and send the response
      const adminAppWithDetails = {
        adminApp,
        customer: {
          ...customer.toObject(), // Convert Mongoose document to plain object
          user: user.toObject() // Convert Mongoose document to plain object
        }
      };
  
      res.status(200).json(adminAppWithDetails);
    } catch (error) {
      console.error('Error fetching admin app by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
