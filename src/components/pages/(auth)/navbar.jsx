import React from 'react';
import ProfileDropdown from '../../dropDown';  // Import the ProfileDropdown component

const Navbar = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex items-center">
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 w-96"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <i className="far fa-bell text-xl text-gray-600"></i>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">5</span>
        </div>

        <div>
          <i className="far fa-comment text-xl text-gray-600"></i>
        </div>

        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
