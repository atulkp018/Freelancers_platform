import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-md p-4 w-1/3 h-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
