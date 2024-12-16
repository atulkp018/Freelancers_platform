import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
