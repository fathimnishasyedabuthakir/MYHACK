import React from 'react';
import { Shield, FileText, Phone, AlertTriangle } from 'lucide-react';

const EmergencyResponse: React.FC = () => {
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

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Live Emergency Alerts</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-900">No active alerts</h3>
              </div>
              <p className="mt-4 text-gray-600">
                There are no active emergency alerts for your area.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Response Plans</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="flex items-center space-x-4">
                <FileText className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-900">Community Evacuation Routes</h3>
              </div>
              <p className="mt-4 text-gray-600">
                In the event of an emergency, please refer to the designated evacuation routes for your area.
              </p>
              <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View Evacuation Plan
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-900">Emergency Shelter Locations</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Find the nearest emergency shelter in your area.
              </p>
              <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Find a Shelter
              </button>
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