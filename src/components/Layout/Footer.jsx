import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <p>&copy; {new Date().getFullYear()} FreeCollab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
