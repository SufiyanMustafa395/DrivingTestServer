// customerController.js
const Customer = require("../models/customer");

const getProfile = async (req, res) => {
  try {
    // Fetch customer profile data based on the user from req.user
    // This is assuming that you have a User model associated with the Customer model
    const customerProfile = await Customer.findOne({
      user: req.user.userId,
    }).populate("user");

    if (!customerProfile) {
      return res.status(404).json({ msg: "Customer profile not found" });
    }

    res.json(customerProfile);
  } catch (error) {
    console.error("Error fetching customer profile:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateProfile = async (req, res) => {
  try {
    // Logic for updating customer profile based on the user from req.user
    // This is assuming that you have a User model associated with the Customer model
    // You can access the updated data from req.body

    // Example: Update customer name
    const updatedProfile = await Customer.findOneAndUpdate(
      { user: req.user.userId },
      {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
      },
      { new: true } // Return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({ msg: "Customer profile not found" });
    }

    res.json(updatedProfile);
    console.log("Customer profile updated successfully");
  } catch (error) {
    console.error("Error updating customer profile:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
