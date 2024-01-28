// customerController.js

const getProfile = async (req, res) => {
    try {
      // Fetch customer profile data based on the user from req.user
      // This is assuming that you have a User model associated with the Customer model
      const customerProfile = await Customer.findOne({ user: req.user.id });
  
      if (!customerProfile) {
        return res.status(404).json({ msg: 'Customer profile not found' });
      }
  
      res.json(customerProfile);
    } catch (error) {
      console.error('Error fetching customer profile:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  const updateProfile = async (req, res) => {
    try {
      // Logic for updating customer profile based on the user from req.user
      // This is assuming that you have a User model associated with the Customer model
      // You can access the updated data from req.body
  
      // Example: Update customer name
      const updatedProfile = await Customer.findOneAndUpdate(
        { user: req.user.id },
        { name: req.body.name },
        { new: true } // Return the updated document
      );
  
      if (!updatedProfile) {
        return res.status(404).json({ msg: 'Customer profile not found' });
      }
  
      res.json(updatedProfile);
    } catch (error) {
      console.error('Error updating customer profile:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  module.exports = {
    getProfile,
    updateProfile,
  };
  