// Step 1 & 2 are done via terminal commands:
// npm init -y
// npm install express

// Step 3-5: Code for server.js
const express = require('express');
const app = express();
const port = 3100;

// Serve static files from the current directory
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});