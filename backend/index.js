const express = require('express');
const app = express();
const port = 3000;

// --- NEW: More realistic air quality simulation ---
const predictAirQuality = (latitude, longitude) => {
  // Create a pseudo-random but deterministic value from coordinates
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const noise = (Math.sin(lat) * 10000) % 100 + (Math.cos(lon) * 10000) % 100;
  const baseAqi = Math.abs(noise * 3) % 200; // AQI value between 0 and 200

  const aqi = Math.round(baseAqi);

  let healthRecommendation = 'Enjoy your usual outdoor activities.';
  let plantsRecommendation = 'Your plants are happy!';

  if (aqi > 150) {
    healthRecommendation = 'Limit outdoor activities. High pollution levels.';
    plantsRecommendation = 'Consider bringing sensitive plants indoors.';
  } else if (aqi > 100) {
    healthRecommendation = 'Unusually sensitive people should consider reducing prolonged or heavy exertion.';
    plantsRecommendation = 'Some plants may be sensitive to the current air quality.';
  } else if (aqi > 50) {
    healthRecommendation = 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people.';
    plantsRecommendation = 'Air is good, ensure your plants get enough sunlight!';
  }

  return {
    'aqi': aqi,
    'recommendations': {
      'health': healthRecommendation,
      'plants': plantsRecommendation
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
