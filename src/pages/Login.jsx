import React from 'react';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  const handleLogin = (data) => {
    // Handle the login logic, e.g., authenticate the user.
    console.log('Logging in with:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
