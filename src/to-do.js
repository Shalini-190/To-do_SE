import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle task input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle adding a task
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="TodoList">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-number">{index + 1}. </span>
            {task}
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
