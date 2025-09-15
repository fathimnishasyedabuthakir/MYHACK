
import React, { useState } from 'react';
import { Phone, AlertTriangle, Send, PlusCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Dummy data for initial alerts
const initialAlerts = [
  { id: 1, position: [34.0522, -118.2437] as [number, number], title: 'Wildfire Alert', description: 'A wildfire is spreading near the Hollywood Hills. Evacuate immediately.' },
  { id: 2, position: [36.1699, -115.1398] as [number, number], title: 'Flood Warning', description: 'Major flooding in downtown Las Vegas. Avoid the area.' },
];

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const EmergencyResponse: React.FC = () => {
  const [alerts] = useState(initialAlerts);
  const [showReportForm, setShowReportForm] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Emergency Response
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Access our emergency response plans, alerts, and contact information.
          </p>
        </div>

        {/* Live Alerts Map */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Live Emergency Alerts Map</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <MapContainer center={[34.0522, -118.2437]} zoom={8} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {alerts.map(alert => (
                  <Marker key={alert.id} position={alert.position}>
                    <Popup>
                      <h3 className="font-bold">{alert.title}</h3>
                      <p>{alert.description}</p>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Report an Incident */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Report an Incident</h2>
          <div className="max-w-4xl mx-auto text-center">
            <button
              onClick={() => setShowReportForm(!showReportForm)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusCircle className="h-6 w-6 mr-2" />
              {showReportForm ? 'Close Form' : 'Report a New Incident'}
            </button>
            {showReportForm && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8 text-left">
                <form>
                  <div className="grid grid-cols-1 gap-y-6">
                    <div>
                      <label htmlFor="incident-type" className="block text-sm font-medium text-gray-700">Incident Type</label>
                      <select id="incident-type" name="incident-type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Fire</option>
                        <option>Flood</option>
                        <option>Medical Emergency</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea id="description" name="description" rows={4} className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                        <Send className="h-5 w-5 mr-2" />
                        Submit Report
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Safety Tips</h2>
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-900">During a Wildfire</h3>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Evacuate immediately if told to do so.</li>
                <li>Stay informed through official channels.</li>
                <li>Have a go-bag with essentials ready.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <AlertTriangle className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-900">During a Flood</h3>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Move to higher ground.</li>
                <li>Do not walk or drive through floodwaters.</li>
                <li>Listen to weather advisories.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Contacts</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-900">Emergency Services</h3>
              </div>
              <p className="mt-4 text-gray-600">
                In case of a life-threatening emergency, dial 911.
              </p>
              <p className="mt-4 text-gray-600 font-semibold">
                Local Police: (123) 456-7890
              </p>
              <p className="mt-2 text-gray-600 font-semibold">
                Local Fire Department: (123) 456-7891
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponse;
