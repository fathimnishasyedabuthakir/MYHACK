import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Cloud,
  Map,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Wind,
  MapPin,
  Clock
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      title: "Hyper-Local Air Quality Predictions",
      description: "A machine learning model that integrates satellite data, ground monitoring stations, and meteorological data to generate hyper-local air quality predictions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Map className="h-8 w-8 text-green-500" />,
      title: "Detailed Local Predictions",
      description: "An air quality forecasting tool that provides detailed local predictions and supports government and citizen decision-making.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "Improved Public Health & Urban Planning",
      description: "Downscale regional air quality data to micro-levels (neighborhoods, streets) to improve public health responses and urban planning.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Data Points Analyzed Daily", icon: <Wind className="h-6 w-6" /> },
    { number: "50+", label: "Cities Monitored", icon: <MapPin className="h-6 w-6" /> },
    { number: "24/7", label: "Real-time Data Integration", icon: <Clock className="h-6 w-6" /> },
    { number: "High", label: "Prediction Accuracy", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const benefits = [
    "Integrates satellite, ground monitoring, and meteorological data",
    "AI-powered predictive analytics for pollution patterns",
    "Hyper-local air quality predictions for neighborhoods and streets",
    "Supports government and citizen decision-making",
    "Improves public health responses and urban planning",
    "Provides an air quality forecasting tool"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Air Quality Downscaling and
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Prediction Model
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Urban air pollution poses serious health risks and environmental concerns. Our solution provides hyper-local air quality predictions to improve public health and urban planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/dashboard"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-all duration-300"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white group-hover:shadow-lg transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Expected Solution &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform delivers critical capabilities that transform how communities respond to environmental challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6">
                    <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-200 flex items-center space-x-2 group">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Model?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our comprehensive platform provides the tools and insights needed to protect communities and improve environmental health outcomes.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Users className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                  <p className="text-blue-100">
                    Connect with environmental professionals, researchers, and community leaders working together for cleaner air.
                  </p>
                </div>
                <Link
                  to="/signup"
                  className="block w-full text-center py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Monitoring Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing network of communities using our model to protect public health and improve environmental outcomes.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
