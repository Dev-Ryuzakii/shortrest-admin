import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Button from '../../Button';
import Form from '../../Form';

const Recover = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);

    // You can add the logic to handle the form submission here, like sending the email to the server
    // Example:
    try {
      const response = await fetch('/api/recover-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        // Navigate to the confirmation page if the request is successful
        navigate('/confirmation');
      } else {
        // Handle errors or show error messages if necessary
        console.error('Error:', result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recover Your Account</h2>
        <p className="text-gray-700 text-center">Please enter your email to recover your account.</p>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <Form
            emailValue={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            showPassword={false}  // Hides the password input
          />
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Recover;
