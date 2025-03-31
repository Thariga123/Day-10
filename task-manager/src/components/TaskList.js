import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
          onToggleComplete={() => onToggleComplete(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;