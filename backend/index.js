
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

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/predict', (req, res) => {
  // For now, we'll use dummy coordinates.
  const latitude = 34.0522;
  const longitude = -118.2437;

  const prediction = predictAirQuality(latitude, longitude);
  res.json(prediction);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
