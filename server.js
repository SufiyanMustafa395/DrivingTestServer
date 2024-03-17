// server.js

const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser'); // Add this line
const { connectToMongoDB, closeMongoDBConnection } = require('./mongodb');
const routes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');  // Import authRoutes

const app = express();
const port = 8080;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add this line to parse request bodies as JSON
app.use(bodyParser.json());

// Connect to MongoDB Atlas
connectToMongoDB();

// Use the routes defined in routes.js
app.use('/', routes);

// Use the auth routes defined in authRoutes.js
app.use('/auth', authRoutes);

// Close MongoDB Atlas connection when the app is terminated
process.on('SIGINT', async () => {
  await closeMongoDBConnection();
  process.exit();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

