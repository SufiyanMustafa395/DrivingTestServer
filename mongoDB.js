const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

const connectToMongoDB = async () => {
  try {
    mongod = await MongoMemoryServer.create();
    const uri = await mongod.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

async function closeMongoDBConnection() {
  console.log('Closing MongoDB connection...');
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}

// Explicit cleanup function
async function cleanup() {
  if (mongod) {
    console.log('Stopping MongoDB server...');
    await mongod.stop();
    console.log('MongoDB server stopped');
  }

  console.log('Cleanup completed');
}

// Handle cleanup on process exit
process.on('beforeExit', async () => {
  await closeMongoDBConnection();
  await cleanup();
});

module.exports = { connectToMongoDB, closeMongoDBConnection };
