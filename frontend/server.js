const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files from the public directory

let urls = [];
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/submit-url', (req, res) => {
    const { url } = req.body;
    urls.push(url);
    res.status(200).send('URL received');
});

app.get('/get-urls', (req, res) => {
    res.json(urls);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
