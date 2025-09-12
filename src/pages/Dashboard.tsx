import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Wind, 
  AlertTriangle, 
  Shield, 
  TreePine, 
  Heart, 
  TrendingUp,
  MapPin,
  Clock,
  Users,
  Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const airQualityData = [
    { location: 'Downtown District', aqi: 42, status: 'Good', color: 'text-green-600 bg-green-100' },
    { location: 'Industrial Zone', aqi: 89, status: 'Moderate', color: 'text-yellow-600 bg-yellow-100' },
    { location: 'Residential Area', aqi: 28, status: 'Good', color: 'text-green-600 bg-green-100' },
    { location: 'Harbor District', aqi: 156, status: 'Unhealthy', color: 'text-red-600 bg-red-100' },
  ];

  const recentAlerts = [
    { time: '2 min ago', message: 'High NO₂ levels detected in Industrial Zone', priority: 'high' },
    { time: '15 min ago', message: 'Air quality improving in Downtown District', priority: 'low' },
    { time: '1 hour ago', message: 'Emergency response plan activated for Harbor District', priority: 'critical' },
  ];

  const stats = [
    { icon: <Wind className="h-6 w-6" />, label: 'Air Quality Index', value: '52', change: '+3%', color: 'text-emerald-600' },
    { icon: <AlertTriangle className="h-6 w-6" />, label: 'Active Alerts', value: '3', change: '-2', color: 'text-red-600' },
    { icon: <Users className="h-6 w-6" />, label: 'People Protected', value: '125K', change: '+5.2%', color: 'text-blue-600' },
    { icon: <TreePine className="h-6 w-6" />, label: 'Trees Recommended', value: '847', change: '+12', color: 'text-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600">
            Here's your environmental monitoring overview for today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Air Quality Monitoring */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Wind className="h-6 w-6 text-emerald-600" />
                  <span>Real-time Air Quality</span>
                </h2>
                <button className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors duration-200">
                  Refresh Data
                </button>
              </div>

              <div className="space-y-4">
                {airQualityData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <div className="font-semibold text-gray-900">{data.location}</div>
                        <div className="text-sm text-gray-600">AQI: {data.aqi}</div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${data.color}`}>
                      {data.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Today's Summary</h3>
                <p className="text-gray-600 text-sm">
                  Overall air quality is <span className="font-semibold text-emerald-600">moderate</span> across monitored areas. 
                  Harbor District requires immediate attention due to elevated pollution levels.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Alerts & Actions */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span>Recent Alerts</span>
              </h2>

              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.priority === 'critical' ? 'bg-red-500' :
                        alert.priority === 'high' ? 'bg-orange-500' : 'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Activity className="h-6 w-6 text-blue-600" />
                <span>Quick Actions</span>
              </h2>

              <div className="space-y-3">
                <button className="w-full p-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <Shield className="h-5 w-5" />
                  <span>Activate Emergency Response</span>
                </button>
                <button className="w-full p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <TreePine className="h-5 w-5" />
                  <span>View Remediation Plan</span>
                </button>
                <button className="w-full p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <Heart className="h-5 w-5" />
                  <span>Issue Health Advisory</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Response Panel */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-red-900 flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span>Emergency Response Status</span>
            </h2>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              All Systems Normal
            </div>
          </div>
          <p className="text-red-700 mb-4">
            Emergency response systems are online and monitoring for critical air quality events. 
            Evacuation plans are ready for deployment if needed.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200">
              View Emergency Plans
            </button>
            <button className="px-4 py-2 bg-white text-red-600 border border-red-300 hover:bg-red-50 rounded-lg transition-colors duration-200">
              Configure Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;