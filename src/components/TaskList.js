import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.taskName}</strong> - Duration: {task.duration} hours - Frequency: {task.frequency} - Category: {task.category} - Preferred Days: {task.preferredDays} - Preferred Time Slots: {task.preferredTimeSlots}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
