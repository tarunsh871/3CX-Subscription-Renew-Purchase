// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to fetch live exchange rates from Open Exchange Rates
app.get('/api/exchange-rate', async (req, res) => {
  try {
    const response = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=YOUR_API_KEY`); // Replace YOUR_API_KEY with your Open Exchange Rates API key
    const exchangeRate = response.data.rates.INR; // Get the INR rate from USD
    res.json({ rate: exchangeRate });
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    res.status(500).json({ error: 'Failed to fetch exchange rate' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
