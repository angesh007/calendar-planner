import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState({
    name: '',
    duration: '',
    frequency: '',
    category: '',
    preferredDays: '',
    preferredTimeSlots: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    // Reset form fields after submission
    setTask({
      name: '',
      duration: '',
      frequency: '',
      category: '',
      preferredDays: '',
      preferredTimeSlots: '',
    });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Task Name" value={task.name} onChange={handleInputChange} />
        <input type="number" name="duration" placeholder="Duration (hours)" value={task.duration} onChange={handleInputChange} />
        <input type="text" name="frequency" placeholder="Frequency (e.g., Daily, Weekly, Monthly)" value={task.frequency} onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category (Professional, Personal, Rest)" value={task.category} onChange={handleInputChange} />
        <input type="text" name="preferredDays" placeholder="Preferred Days (Weekdays, Weekends, or both)" value={task.preferredDays} onChange={handleInputChange} />
        <input type="text" name="preferredTimeSlots" placeholder="Preferred Time Slots" value={task.preferredTimeSlots} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskInput;
