import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get project ID from URL

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Navbar />
        <h1 className="text-3xl font-semibold mb-4">Project Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Project #{projectId}</h2>
          <p className="text-gray-500 mt-2">
            Detailed information about the project. This could include the tasks, team members, deadlines, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
