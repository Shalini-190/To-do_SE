import React, { useState, useEffect } from 'react';
import './App.css'

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-number">{index + 1}.</span> 
            <span className="task-text">{task}</span>
            <button onClick={() => handleDeleteTask(index)} className="delete-task-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


