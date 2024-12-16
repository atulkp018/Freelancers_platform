import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-60 p-4 space-y-4">
      <h2 className="text-lg font-semibold">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/chat" className="hover:underline">
            Chat
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
