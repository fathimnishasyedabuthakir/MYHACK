import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useAuth } from '../contexts/AuthContext';
import { 
  TrendingUp,
  Map,
  Users,
  Clock,
  Activity,
  Wind
} from 'lucide-react';
import HyperLocalAirQuality from '../components/HyperLocalAirQuality';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const predictionInsights = [
    { time: '5 min ago', message: 'High probability of increased ozone levels in Downtown Core by 3 PM.', priority: 'high' },
    { time: '30 min ago', message: 'Air quality expected to improve in Residential Zone B.', priority: 'low' },
    { time: '2 hours ago', message: 'Model predicts pollutant concentration increase near Industrial Park.', priority: 'critical' },
  ];

  const stats = [
    { icon: <TrendingUp className="h-6 w-6" />, label: 'Prediction Accuracy', value: '92%', change: '+1.5%', color: 'text-cyan-600' },
    { icon: <Map className="h-6 w-6" />, label: 'Areas Covered', value: '15', change: '+2', color: 'text-blue-600' },
    { icon: <Users className="h-6 w-6" />, label: 'Active Users', value: '500+', change: '+10%', color: 'text-green-600' },
    { icon: <Clock className="h-6 w-6" />, label: 'Forecast Horizon', value: '48h', change: '+12h', color: 'text-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600">
            Here is your air quality prediction and analysis dashboard.
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
          {/* Hyper-Local Air Quality */}
          <div className="lg:col-span-2">
             <HyperLocalAirQuality />
          </div>

          {/* Prediction Insights & Actions */}
          <div className="space-y-6">
            {/* Insights */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span>Prediction Insights</span>
              </h2>

              <div className="space-y-4">
                {predictionInsights.map((insight, index) => (
                  <div key={index} className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        insight.priority === 'critical' ? 'bg-red-500' :
                        insight.priority === 'high' ? 'bg-orange-500' : 'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 mb-1">{insight.message}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{insight.time}</span>
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
                <Activity className="h-6 w-6 text-green-600" />
                <span>Quick Actions</span>
              </h2>

              <div className="space-y-3">
                <Link to="/map" className="w-full p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <Map className="h-5 w-5" />
                  <span>View Detailed Forecast</span>
                </Link>
                <button className="w-full p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>Notify Citizens</span>
                </button>
                <button className="w-full p-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl transition-colors duration-200 flex items-center space-x-3">
                  <Wind className="h-5 w-5" />
                  <span>Adjust Model Parameters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
