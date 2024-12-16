import React from 'react';
import SignupForm from '../components/Auth/SignupForm';

const Signup = () => {
  const handleSignup = (data) => {
    // Handle the signup logic, e.g., create a new user.
    console.log('Signing up with:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default Signup;
