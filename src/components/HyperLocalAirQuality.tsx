
import React, { useState, useEffect } from 'react';
import { Wind, HeartPulse, Leaf, AlertTriangle, Cloud, MapPin } from 'lucide-react';

interface AirQualityData {
  aqi: number;
  recommendations: {
    health: string;
    plants: string;
  };
  location: string; // Assuming the backend can provide a location name
}

const HyperLocalAirQuality: React.FC = () => {
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`/api/predict?lat=${latitude}&lon=${longitude}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => setAirQuality({ ...data, location: "Your Current Location" }))
            .catch(err => setError('Failed to fetch air quality data. Is the backend running?'));
        },
        (err) => {
          setError(`Geolocation error: ${err.message}. Please enable location services.`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
        <Cloud className="h-6 w-6 text-cyan-600" />
        <span>Your Hyper-Local Air Quality</span>
      </h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><AlertTriangle className="h-6 w-6 text-red-500 mr-4" /></div>
            <div>
              <p className="font-bold">Could not fetch data</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!airQuality && !error && (
        <div className="text-center text-gray-500">
            <p>Loading real-time air quality data for your location...</p>
        </div>
      )}

      {airQuality && (
        <div className="space-y-4">
          {/* Location & AQI */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <div className="font-semibold text-gray-900">{airQuality.location}</div>
                <div className="text-sm text-gray-600">Predicted AQI: {airQuality.aqi}</div>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${airQuality.aqi > 100 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>
              {airQuality.aqi > 100 ? 'Unhealthy' : 'Good'}
            </div>
          </div>

          {/* Recommendations */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start ring-1 ring-gray-200">
              <HeartPulse className="flex-shrink-0 h-6 w-6 text-red-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Health</h3>
                <p className="text-gray-600">{airQuality.recommendations.health}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start ring-1 ring-gray-200">
              <Leaf className="flex-shrink-0 h-6 w-6 text-green-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Plants</h3>
                <p className="text-gray-600">{airQuality.recommendations.plants}</p>
              </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default HyperLocalAirQuality;
