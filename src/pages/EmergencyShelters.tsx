
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Shield, MapPin, Phone } from 'lucide-react';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const shelters = [
  { id: 1, name: 'Community Rec Center', position: [34.0722, -118.2637] as [number, number], capacity: 150, contact: '123-456-7890' },
  { id: 2, name: 'Northwood High School', position: [34.0322, -118.2237] as [number, number], capacity: 300, contact: '123-456-7891' },
  { id: 3, name: 'Downtown Arena', position: [34.0522, -118.2437] as [number, number], capacity: 1000, contact: '123-456-7892' },
];

const EmergencyShelters: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Emergency Shelter Locations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[70vh] w-full bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200">
            <MapContainer center={[34.0522, -118.2437]} zoom={11} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {shelters.map(shelter => (
                <Marker key={shelter.id} position={shelter.position}>
                  <Popup>
                    <h3 className="font-bold">{shelter.name}</h3>
                    <p>Capacity: {shelter.capacity}</p>
                    <p>Contact: {shelter.contact}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Shelters</h2>
            <div className="space-y-4">
              {shelters.map(shelter => (
                <div key={shelter.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{shelter.name}</h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{shelter.position[0]}, {shelter.position[1]}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>{shelter.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyShelters;
