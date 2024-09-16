import React, { useState } from 'react';

const ProfileDropdown = () => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle each option click
  const handleViewProfile = () => {
    console.log("View Profile clicked");
    // Add your view profile logic here
  };

  const handleChangePassword = () => {
    console.log("Change Password clicked");
    // Add your change password logic here
  };

  const handleLogout = () => {
    console.log("Log Out clicked");
    // Add your log out logic here
  };

  return (
    <div className="relative">
      {/* Profile and Dropdown Icon */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">
          T
        </div>
        <span className="text-gray-700">Temmy Anjous</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-gray-600`}></i>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2 text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleViewProfile}
            >
              View Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleChangePassword}
            >
              Change Password
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
