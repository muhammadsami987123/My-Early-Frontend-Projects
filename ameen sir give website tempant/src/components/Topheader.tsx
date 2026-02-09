import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="font-sans">
      {/* Top Header */}
      <div className="bg-black text-white text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a
            href="https://www.facebook.com/profile.php?id=100044619184212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook className="text-lg" />
          </a>
          <a
            href="https://github.com/muhammadsami987123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/muhammad_sami3344/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagramSquare className="text-lg" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">📞</span>
            <span>+92 345 256257</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">📞</span>
            <span>+92 345 256367</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
            CALL ME BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
