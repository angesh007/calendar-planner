// MonthlyCalendar.js
import React from 'react';
import './MonthlyCalendar.css';

function MonthlyCalendar({ tasks }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const taskSlots = Array.from({ length: daysInMonth }, () => []);

  tasks.forEach((task) => {
    const taskDate = new Date(task.date);
    if (
      taskDate.getFullYear() === currentYear &&
      taskDate.getMonth() === currentMonth
    ) {
      const dayOfMonth = taskDate.getDate();
      taskSlots[dayOfMonth - 1].push(task);
    }
  });

  let totalHours = 0;
  let conflictDetected = false;
  taskSlots.forEach((dayTasks) => {
    let dayHours = 0;
    dayTasks.forEach((task) => {
      dayHours += task.duration;
    });
    if (dayHours > 24) {
      conflictDetected = true;
    }
    totalHours += dayHours;
  });

  const remainingHours = 672 - totalHours;

  return (
    <div className="monthly-calendar">
      <h2>
        {new Date(currentYear, currentMonth).toLocaleString('default', {
          month: 'long',
        })}{' '}
        {currentYear}
      </h2>
      <div className="calendar-grid">
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dayTasks = taskSlots[index];
          const dayClassName =
            dayTasks.length > 0 ? 'calendar-day with-tasks' : 'calendar-day';

          return (
            <div key={day} className={dayClassName}>
              <div className="day-number">{day}</div>
              <div className="task-list">
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className="task"
                    style={{ backgroundColor: task.color }}
                  >
                    {task.name} - {task.duration} hrs
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {conflictDetected && (
        <p className="conflict-message">
          Conflicts detected! Adjust your schedule.
        </p>
      )}
      <p>Total allocated hours: {totalHours} hrs</p>
      <p>Remaining hours: {remainingHours} hrs</p>
    </div>
  );
}

export default MonthlyCalendar;
