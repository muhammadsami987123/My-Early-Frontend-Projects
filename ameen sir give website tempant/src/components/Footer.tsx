import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
        {/* Company Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4 uppercase">
            <span className="text-gray-100">pana</span>
            <span className="text-green-300">cloud</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <p className="mt-6 text-sm">&copy; PanaCloud {new Date().getFullYear()}</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Services</h4>
          <ul className="space-y-2 text-sm">
            {['Web Design', 'App Development', 'SEO & Ads', 'Digital Marketing'].map((item, index) => (
              <li key={index} className="hover:text-gray-300 cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {['About Us', 'Contact Us', 'Portfolio', 'Blog'].map((item, index) => (
              <li key={index} className="hover:text-gray-300 cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Contacts</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              📞 <span className="ml-2">+92 304 386-6719</span>
            </li>
            <li className="flex items-center">
              📞 <span className="ml-2">+92 317 011-3001</span>
            </li>
            <li className="flex items-center">
              ✉️ <span className="ml-2">m.samiwaseem1234@gmail.com</span>
            </li>
          </ul>

          {/* Social Media */}
          <h4 className="text-md font-semibold mt-6">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100044619184212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/muhammadsami987123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/muhammad_sami3344/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} PanaCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
