const DogProfile = require("../models/dog");

const getDogProfile = async (req, res) => {
  try {
    const dogProfile = await DogProfile.findOne({ owner: req.user.userId });
    if (!dogProfile) {
      return res.status(404).json({ msg: "Dog profile not found" });
    }
    res.json(dogProfile);
  } catch (error) {
    console.error("Error fetching dog profile:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateDogProfile = async (req, res) => {
  try {
    // Logic for updating dog profile based on the user's ID from req.user
    const updatedDogProfile = await DogProfile.findOneAndUpdate(
      { owner: req.user.userId }, // Filter by owner ID
      req.body, // Update with request body
      { new: true } // Return the updated document
    );
    if (!updatedDogProfile) {
      return res.status(404).json({ msg: "Dog profile not found" });
    }
    console.log("Updated Dog Profile:", updatedDogProfile);
    res.json(updatedDogProfile);
    console.log("Dog profile updated successfully");
  } catch (error) {
    console.error("Error updating dog profile:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getDogProfile,
  updateDogProfile,
};