const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/user'); // Adjust the path as necessary
const progressRoutes = require('./routes/progressRoutes'); // Existing progress routes

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS Middleware for cross-origin requests
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fluentique', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// API routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/progress', progressRoutes); // Progress routes

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file from the build folder.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Choose the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
