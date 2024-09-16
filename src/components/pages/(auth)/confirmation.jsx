import React, { useState } from 'react';
import Button from '../../Button'; // Import your reusable Button component

const ConfirmEmail = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/confirm-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Email confirmed successfully!');
        // Handle successful confirmation (e.g., redirect to login page)
      } else {
        setError(result.message || 'Failed to confirm email. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/resend-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('A new code has been sent to your email.');
      } else {
        setError(result.message || 'Failed to resend code. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Confirm Your Email</h2>
        <p className='text-lg mb-6 text-center'>
          We have sent a confirmation code to your email. Please enter it below to confirm your email address.
        </p>
        <form className='space-y-4' onSubmit={handleConfirm}>
          <div className="relative">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">Confirmation Code</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter confirmation code"
              className="w-full p-2 pl-4 bg-[#FBEDED] border border-gray-300 rounded-full outline-none"
              required
            />
          </div>
          {error && <p className='text-red-500 text-center'>{error}</p>}
          {success && <p className='text-green-500 text-center'>{success}</p>}
          <Button onClick={handleConfirm} className={`w-full mt-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : ''}`} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm'}
          </Button>
          <Button onClick={handleResendCode} className={`w-full mt-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`} disabled={loading}>
            {loading ? 'Sending...' : 'Resend Code'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmEmail;
