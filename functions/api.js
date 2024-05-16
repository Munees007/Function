const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Define routes
app.get('/.netlify/functions/api/data', (req, res) => {
    res.json({ message: 'Hello from the serverless API!' });
});

// Export express app as a serverless function
module.exports.handler = serverless(app);
