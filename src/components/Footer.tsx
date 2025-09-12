import React from 'react';
import { Wind, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Air Quality Model
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A machine learning model that integrates satellite data, ground monitoring stations, and meteorological data to generate hyper-local air quality predictions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-cyan-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Air Quality Model. All rights reserved. 
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
