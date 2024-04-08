// mongodb.js
const mongoose = require("mongoose");

// Import your models
const User = require("./models/user");
const Customer = require("./models/customer");
const Appointment = require("./models/appointment");
const AppointmentNoLoggin = require("./models/appointmentNoLoggin");
const Service = require("./models/service");
const Dog = require("./models/dog");
const Groomer = require("./models/groomer");
const Feedback = require("./models/feedback");

const connectToMongoDB = async () => {
  try {
    const atlasConnectionString =
      "mongodb+srv://groom:groom1234@cluster0.s32mnvh.mongodb.net/groomingApp?retryWrites=true&w=majority";
    await mongoose.connect(atlasConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
  }
};

async function closeMongoDBConnection() {
  console.log("Closing MongoDB Atlas connection...");
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB Atlas");
}

// Export your models for use in other files
module.exports = {
  connectToMongoDB,
  closeMongoDBConnection,
  User,
  Customer,
  Appointment,
  AppointmentNoLoggin,
  Service,
  Dog,
  Groomer,
  Feedback,
};
