const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/grooming-shop', { useNewUrlParser: true, useUnifiedTopology: true });

// MongoDB connection event handlers
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
