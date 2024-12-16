import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Navbar />
        <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-500 mt-2">A brief description of Project 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p className="text-gray-500 mt-2">A brief description of Project 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 3</h2>
            <p className="text-gray-500 mt-2">A brief description of Project 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
