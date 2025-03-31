import React, { useState } from 'react';

const TaskForm = ({ onSubmit, existingTask }) => {
  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [dueDate, setDueDate] = useState(existingTask?.dueDate || '');
  const [status, setStatus] = useState(existingTask?.status || 'Open');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert('Title is required');
    onSubmit({ title, description, dueDate, status });
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Open');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{existingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;