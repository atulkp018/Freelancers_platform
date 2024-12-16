import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow rounded-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{task.description}</p>
      <div className="text-sm text-gray-500 mt-4">
        <span>Assigned to: </span>
        <span className="font-medium">{task.assignee}</span>
      </div>
    </div>
  );
};

export default TaskCard;
