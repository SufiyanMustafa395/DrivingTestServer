// server.js

const express = require('express');
const { connectToMongoDB, closeMongoDBConnection } = require('./mongodb');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB Atlas
connectToMongoDB();

// Define route for the home page
app.get('/', (req, res) => {
  // Logic to fetch data for the home page
  res.send('Home Page');
});

// Define route for services
app.get('/services', (req, res) => {
  // Logic to fetch data for services
  res.send('Services Page');
});

// Define route for contact information
app.get('/contact', (req, res) => {
  // Logic to fetch contact information
  res.send('Contact Page');
});

// Close MongoDB Atlas connection when the app is terminated
process.on('SIGINT', async () => {
  await closeMongoDBConnection();
  process.exit();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
