import React from 'react';

const Sidebar = ({ activePage, onChangePage }) => {
  return (
    <div className="w-64 bg-white h-full shadow-md">
      <nav className="px-6 py-4">
        <ul>
          {/* Dashboard Button */}
          <li className="mb-4">
            <button
              onClick={() => onChangePage('dashboard')}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                activePage === 'dashboard'
                  ? 'bg-black text-white' // Active state
                  : 'text-gray-700 hover:bg-gray-200' // Inactive state
              }`}
            >
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </button>
          </li>

          {/* Orders Button */}
          <li className="mb-4">
            <button
              onClick={() => onChangePage('orders')}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                activePage === 'orders'
                  ? 'bg-black text-white' // Active state
                  : 'text-gray-700 hover:bg-gray-200' // Inactive state
              }`}
            >
              <i className="fas fa-box"></i>
              <span>Orders</span>
            </button>
          </li>

          {/* Add more sidebar items similarly */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
