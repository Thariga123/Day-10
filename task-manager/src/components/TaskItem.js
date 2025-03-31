const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
    return (
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <button onClick={onToggleComplete}>
          {task.status === 'Completed' ? 'Reopen' : 'Mark as Complete'}
        </button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;