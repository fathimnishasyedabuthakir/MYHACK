import React from 'react';
import { Shield, Bell, FileText } from 'lucide-react';

const HealthAdvisories: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Health Advisories & Emergency Response
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Stay informed about the latest health advisories and access our emergency response plans.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Health Advisories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Advisory Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Bell className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">High Pollen Count</h3>
                    <p className="mt-2 text-gray-600">
                      High pollen levels have been reported in the area. Individuals with respiratory sensitivities should take precautions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Bell className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Air Quality Alert</h3>
                    <p className="mt-2 text-gray-600">
                      An air quality alert is in effect due to increased particulate matter. Limit outdoor activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Bell className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Heat Advisory</h3>
                    <p className="mt-2 text-gray-600">
                      Extreme heat is expected for the next 48 hours. Stay hydrated and avoid strenuous outdoor activities.
                    </p>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default HealthAdvisories;