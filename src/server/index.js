const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../.././build')));

// Define other routes or API endpoints here

// Always serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../.././build', 'index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
