import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import './App.css';
import TodoApp from './TodoApp'; 
import ScheduleReminderPlanner from './ScheduleReminderPlanner'
import SeniorScheduleReminder from './SeniorScheduleReminder';

export default function App() {
  return (
    <div>
      <ScheduleReminderPlanner/>
      <SeniorScheduleReminder/>
      <div className="login">
    
    </div>
    </div>
  );
}