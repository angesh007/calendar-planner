// Calendar.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import MonthlyCalendar from './MonthlyCalendar';

function Calendar() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Monthly Calendar</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
      <MonthlyCalendar tasks={tasks} />
    </div>
  );
}

export default Calendar;
