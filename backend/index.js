
const express = require('express');
const app = express();
const port = 3000;

// Dummy function for air quality prediction
const predictAirQuality = (latitude, longitude) => {
  // In the future, this function will use a trained model to predict air quality.
  // For now, it returns a dummy value.
  return {
    'aqi': 50,  // Air Quality Index
    'recommendations': {
      'health': 'Enjoy your usual outdoor activities.',
      'plants': 'Your plants are happy!'
    }
  };
};

app.get('/api/predict', (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res.status(400).send({ error: 'Latitude and longitude are required.' });
  }
  const prediction = predictAirQuality(lat, lon);
  res.send(prediction);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
