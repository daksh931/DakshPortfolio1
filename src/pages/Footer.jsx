import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

function Footer() {
  return (
    <div className=" py-12 border-t ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
      
        {/* First Section - Company Logo and Description */}
        <div>
          {/* <img src="/path-to-your-logo.png" alt="Company Logo" className="h-12 mb-4" /> */}
          <h1 className='font-medium text-[17px] mb-5'>Web Dev Services</h1>
          <p className="text-sm ">We provide innovative solutions to help businesses grow and thrive in the digital age.</p>
        </div>

        {/* Second Section - Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact </h3>
          <p className="text-sm ">Email: goyaldaksh5522@gmail.com</p>
          <p className="text-sm ">Phone: +91 9463244207</p>
        </div>

        {/* Third Section - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-sm  hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="/work" className="text-sm  hover:text-orange-500 transition-colors">Our Work</a></li>
            <li><a href="/services" className="text-sm  hover:text-orange-500 transition-colors">Our Services</a></li>
            <li><a href="/contact" className="text-sm  hover:text-orange-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Fourth Section - Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/goyal5522" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/daksh-goyal-550679215/" className="text-gray-400 hover:text-blue-700 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-pink-600 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">Copyright © {new Date().getFullYear()} All Rights Reserved </p>
      </div>
    </div>
  );
}
export default Footer;
