
import React, { useState, useEffect } from 'react';
import { Wind, HeartPulse, Leaf, AlertTriangle } from 'lucide-react';

interface AirQualityData {
  aqi: number;
  recommendations: {
    health: string;
    plants: string;
  };
}

const AirQuality: React.FC = () => {
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
            .then(data => setAirQuality(data))
            .catch(() => setError('Failed to fetch air quality data. Is the backend running?'));
        },
        (err) => {
          setError(`Geolocation error: ${err.message}. Please enable location services.`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md mx-auto rounded-lg shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><AlertTriangle className="h-6 w-6 text-red-500 mr-4" /></div>
            <div>
              <p className="font-bold">An error occurred</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!airQuality) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-gray-500 text-lg">Loading hyper-local air quality data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Hyper-Local Air Quality
          </h1>
          
          <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg mb-6 ring-1 ring-blue-200">
            <Wind className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-gray-600 text-lg">Current AQI</p>
              <p className="text-4xl font-bold text-blue-800">{airQuality.aqi}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recommendations</h2>
          <div className="space-y-4">
            {/* Health Recommendation */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start ring-1 ring-gray-200">
              <HeartPulse className="flex-shrink-0 h-6 w-6 text-red-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Health</h3>
                <p className="text-gray-600">{airQuality.recommendations.health}</p>
              </div>
            </div>

            {/* Plants Recommendation */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start ring-1 ring-gray-200">
              <Leaf className="flex-shrink-0 h-6 w-6 text-green-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Plants</h3>
                <p className="text-gray-600">{airQuality.recommendations.plants}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AirQuality;
