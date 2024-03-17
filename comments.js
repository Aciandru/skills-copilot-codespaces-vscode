// Create web server
// Create a route to handle comments
// Create a route to handle POST requests to /comments
// Create a route to handle DELETE requests to /comments/:id
// Listen on port 3000
// Run the server with node comments.js

// Import the express library
const express = require('express');

// Create a new web server
const app = express();

// Create a new route to handle GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// Create a new route to handle POST requests to /comments
app.post('/comments', (req, res) => {
  res.send('You have sent a POST request to /comments');
});

// Create a new route to handle DELETE requests to /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('You have sent a DELETE request to /comments');
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});