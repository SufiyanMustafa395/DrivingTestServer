//server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongoDB, closeMongoDBConnection } = require('./mongodb');
const routes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');
const passwordRoute = require('./routes/passwordRoute');

const app = express();
const port = 8080;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse request bodies as JSON
app.use(bodyParser.json());

// Middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB Atlas
connectToMongoDB();

// Use the routes defined in routes.js
app.use('/', routes);

// Use the auth routes defined in authRoutes.js
app.use('/auth', authRoutes);

// Use the password routes defined in passwordRoute.js
app.use('/password', passwordRoute);

// Close MongoDB Atlas connection when the app is terminated
process.on('SIGINT', async () => {
  await closeMongoDBConnection();
  process.exit();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});