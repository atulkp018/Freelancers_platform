import React, { useState } from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do',
      tasks: [
        { id: 101, title: 'Design Login Page', description: 'Create wireframes and mockups', assignee: 'John' },
        { id: 102, title: 'Set up Firebase', description: 'Configure Firestore and Authentication', assignee: 'Alice' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [
        { id: 201, title: 'Develop Task Board UI', description: 'Implement UI for task management', assignee: 'Bob' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        { id: 301, title: 'Finalize Branding', description: 'Logo and primary color palette', assignee: 'Kate' },
      ],
    },
  ]);

  return (
    <div className="flex space-x-4 p-6 bg-gray-50 min-h-screen">
      {columns.map((column) => (
        <TaskColumn key={column.id} title={column.title} tasks={column.tasks} />
      ))}
    </div>
  );
};

export default TaskBoard;
