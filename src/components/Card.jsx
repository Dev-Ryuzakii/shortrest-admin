import React from 'react';

const Card = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="text-xl font-semibold">{value}</div>
      <div className={`text-sm ${icon === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {change} {icon === 'up' ? '▲' : '▼'}
      </div>
    </div>
  );
};

export default Card;
