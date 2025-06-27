
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">GoPocket</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/car-insurance" className="text-gray-700 hover:text-blue-600 font-medium">
              Car Insurance
            </Link>
            <Link to="/health-insurance" className="text-gray-700 hover:text-blue-600 font-medium">
              Health Insurance
            </Link>
            <Link to="/life-insurance" className="text-gray-700 hover:text-blue-600 font-medium">
              Life Insurance
            </Link>
            <Link to="/travel-insurance" className="text-gray-700 hover:text-blue-600 font-medium">
              Travel Insurance
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>1800-123-4567</span>
            </div>
            <Link
              to="/get-quote"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
