
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-akaay-blue">Akaay</span> Foundation
            </h3>
            <p className="text-gray-400 mb-6">
              India's first humanitarian organization focused on creating direct impact through zero bureaucracy.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Akaay Foundation.<br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Education For All
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Rural Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Women Empowerment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Sustainable Livelihoods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Water & Sanitation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-akaay-blue transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Attribution */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Developed by <span className="text-akaay-blue">Adrian Okonkwo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
