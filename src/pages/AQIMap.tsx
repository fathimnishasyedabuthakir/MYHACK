
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Sample data for map markers
const locations = [
  { position: [28.6139, 77.2090], name: 'New Delhi', aqi: 180 },
  { position: [19.0760, 72.8777], name: 'Mumbai', aqi: 95 },
  { position: [12.9716, 77.5946], name: 'Bangalore', aqi: 60 },
  { position: [22.5726, 88.3639], name: 'Kolkata', aqi: 120 },
  { position: [13.0827, 80.2707], name: 'Chennai', aqi: 75 },
];

const createAqiIcon = (aqi: number) => {
    const getAqiColor = () => {
        if (aqi <= 50) return '#22c55e'; // green-500
        if (aqi <= 100) return '#eab308'; // yellow-500
        if (aqi <= 150) return '#f97316'; // orange-500
        return '#ef4444'; // red-500
    }

    const color = getAqiColor();

    return L.divIcon({
        html: `<div style="background-color: ${color}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">${aqi}</div>`,
        className: 'dummy', // required by leaflet
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

const AQIMap: React.FC = () => {
  const defaultPosition: [number, number] = [20.5937, 78.9629]; // Center of India

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Real-Time Air Quality Map
            </h1>
            <div className="h-[70vh] w-full bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200">
                <MapContainer center={defaultPosition} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map(loc => (
                         <Marker key={loc.name} position={loc.position as [number, number]} icon={createAqiIcon(loc.aqi)}>
                            <Popup>
                                <div className="font-bold text-base">{loc.name}</div>
                                <div>AQI: <strong>{loc.aqi}</strong></div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    </div>
  );
};

export default AQIMap;
