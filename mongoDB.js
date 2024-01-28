// mongodb.js

const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    const atlasConnectionString = 'mongodb+srv://groom:groom1234@cluster0.s32mnvh.mongodb.net/groomingApp?retryWrites=true&w=majority';
    await mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB Atlas connection error:', error);
  }
};

async function closeMongoDBConnection() {
  console.log('Closing MongoDB Atlas connection...');
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB Atlas');
}

module.exports = { connectToMongoDB, closeMongoDBConnection };
