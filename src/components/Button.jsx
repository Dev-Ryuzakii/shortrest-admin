import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-96 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
