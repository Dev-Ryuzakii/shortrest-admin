import React, { useState } from 'react';

const Form = ({ 
  emailValue, 
  passwordValue, 
  onEmailChange, 
  onPasswordChange, 
  emailPlaceholder, 
  passwordPlaceholder, 
  showEmail = true, 
  showPassword = true 
}) => {
  // State to manage password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form className="space-y-4 my-3">
      {/* Conditionally Render Email Input */}
      {showEmail && (
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={onEmailChange}
              placeholder={emailPlaceholder}
              className="w-96 p-2 pl-12 bg-[#FBEDED] border border-gray-300 rounded-full outline-none"
              required
            />
            <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      )}

      {/* Conditionally Render Password Input */}
      {showPassword && (
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              value={passwordValue}
              onChange={onPasswordChange}
              placeholder={passwordPlaceholder}
              className="w-96 p-2 pl-12 bg-[#FBEDED] border border-gray-300 rounded-full outline-none"
              required
            />
            <i className="fas fa-key absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
