import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section (Logo or Company Name) */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Ezz Student</h2>
            <p className="text-sm">© 2025 Ezz Student. All rights reserved.</p>
          </div>

          {/* Center Section (Links or Navigation) */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#curriculum" className="text-gray-400 hover:text-white transition-colors">Curriculum</a>
            <a href="#papers" className="text-gray-400 hover:text-white transition-colors">Que. Papers</a>
            <a href="#aboutus" className="text-gray-400 hover:text-white transition-colors">About us</a>
            <a href="#contactus" className="text-gray-400 hover:text-white transition-colors">Contact us</a>
          </div>

          {/* Right Section (Social Media Icons) */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
