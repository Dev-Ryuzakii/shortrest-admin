import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../Form';
import Button from '../../Button';
import img1 from '../../../assets/Image/img1.png';
import img2 from '../../../assets/Image/img2.png';
import img3 from '../../../assets/Image/img3.png';
import img4 from '../../../assets/Image/img4.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='grid grid-cols-2 h-screen'>
      {/* Left Side with Images */}
      <div className="bg-gray-200 h-screen p-8">
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* Section 1 */}
          <div
            className="bg-cover bg-center rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <p className="text-lg font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Section 1</p>
          </div>

          {/* Section 2 */}
          <div
            className="bg-cover bg-center rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <p className="text-lg font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Section 2</p>
          </div>

          {/* Section 3 */}
          <div
            className="bg-cover bg-center rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <p className="text-lg font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Section 3</p>
          </div>

          {/* Section 4 */}
          <div
            className="bg-cover bg-center rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <p className="text-lg font-semibold text-white bg-gray-800 bg-opacity-50 p-2 rounded">Section 4</p>
          </div>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className='flex flex-col items-center justify-center py-8'>
        <p className='text-2xl font-semibold mb-4'>Create Account</p>
        <p className="text-xl mb-4">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 cursor-pointer hover:underline">
            Log In
          </Link>
        </p>
        <Form
          emailValue={email}
          passwordValue={password}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} className="mt-4">
          Submit
        </Button>
        <p className='text-xl mt-2'>Forgot password?</p>
        <p className='my-1 text-gray-400'>Login with</p>
        <div className="my-6">
          {/* Google Button */}
          <div className="flex items-center justify-center w-96 p-2 border rounded cursor-pointer hover:bg-gray-100">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" className="w-6 h-6 mr-2" />
            <p className="text-gray-700">Continue with Google</p>
          </div>

          {/* Facebook Button */}
          <div className="flex items-center justify-center w-96 p-2 border rounded mt-4 cursor-pointer hover:bg-gray-100">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook Icon" className="w-6 h-6 mr-2" />
            <p className="text-gray-700">Continue with Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
