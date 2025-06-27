
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">GoPocket</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's leading insurance marketplace helping millions find the right insurance at the best prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Insurance Products</h3>
            <ul className="space-y-3">
              <li><Link to="/car-insurance" className="text-gray-300 hover:text-white transition-colors">Car Insurance</Link></li>
              <li><Link to="/health-insurance" className="text-gray-300 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link to="/life-insurance" className="text-gray-300 hover:text-white transition-colors">Life Insurance</Link></li>
              <li><Link to="/travel-insurance" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</Link></li>
              <li><Link to="/home-insurance" className="text-gray-300 hover:text-white transition-colors">Home Insurance</Link></li>
              <li><Link to="/business-insurance" className="text-gray-300 hover:text-white transition-colors">Business Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/claims" className="text-gray-300 hover:text-white transition-colors">Claims Support</Link></li>
              <li><Link to="/renewals" className="text-gray-300 hover:text-white transition-colors">Renewals</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Insurance Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">support@GoPocket.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Business Center, <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GoPocket. All rights reserved. IRDAI Registration Number: XXXXX
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
