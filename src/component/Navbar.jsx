import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className="bg-gray-950 text-gray-200 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left Spacer */}
        <div className="w-1/3"></div>

        {/* Centered Menu */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-9">
          <li onClick={() => setMenu('Home')}>
            <Link
              to="/home"
              className={`text-2xl font-bold cursor-pointer hover:text-teal-400 ${
                menu === 'Home' ? 'border-b-4 border-teal-400' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenu('About')}>
            <Link
              to="/about"
              className={`text-2xl font-bold cursor-pointer hover:text-teal-400 ${
                menu === 'About' ? 'border-b-4 border-teal-400' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li onClick={() => setMenu('Contact')}>
            <Link
              to="/contact"
              className={`text-2xl font-bold cursor-pointer hover:text-teal-400 ${
                menu === 'Contact' ? 'border-b-4 border-teal-400' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Profile Button */}
        <div className="w-1/3 flex justify-end">
          <Link
            to="/profile"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-md font-semibold text-lg"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
