
import React, { useState, useEffect } from 'react';

interface AirQualityData {
  aqi: number;
  recommendations: {
    health: string;
    plants: string;
  };
}

const AirQuality: React.FC = () => {
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);

  useEffect(() => {
    // Fetch air quality data from the backend
    fetch('/api/predict?lat=12.9716&lon=77.5946')
      .then(response => response.json())
      .then(data => setAirQuality(data));
  }, []);

  if (!airQuality) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Air Quality</h1>
      <p>AQI: {airQuality.aqi}</p>
      <h2>Recommendations</h2>
      <p>Health: {airQuality.recommendations.health}</p>
      <p>Plants: {airQuality.recommendations.plants}</p>
    </div>
  );
};

export default AirQuality;
