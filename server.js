// server.js

const express = require('express');
const { connectToMongoDB, closeMongoDBConnection } = require('./mongodb');
const routes = require('./routes');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB Atlas
connectToMongoDB();

// Use the routes defined in routes.js
app.use('/', routes);

// Close MongoDB Atlas connection when the app is terminated
process.on('SIGINT', async () => {
  await closeMongoDBConnection();
  process.exit();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
