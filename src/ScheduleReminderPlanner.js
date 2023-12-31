import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import './App.css';

export default function ScheduleReminderPlanner() {
    const [alarms, setAlarms] = useState([]);
    const [newAlarm, setNewAlarm] = useState({ time: '', name: '', sound: '', memo: '' });
  
    const handleAlarmChange = (event) => {
      const { name, value } = event.target;
      setNewAlarm((prevAlarm) => ({ ...prevAlarm, [name]: value }));
    };
  
    const handleAddAlarm = () => {
      setAlarms((prevAlarms) => [...prevAlarms, newAlarm]);
      setNewAlarm({ time: '', name: '', sound: '', memo: '' });
    };
  
    return (
      <div className="app-container">
        <div className="input-section">
          <div className="input-section time-input">
            <label>알람 시간: </label>
            <input type="time" name="time" value={newAlarm.time} onChange={handleAlarmChange} />
            <p>시간을 설정해주세요.</p>
          </div>
          <div className="input-section details-input">
            <label>알람 이름 </label>
            <input type="text" name="name" value={newAlarm.name} onChange={handleAlarmChange} />
            <label>메모 </label>
            <textarea name="memo" value={newAlarm.memo} onChange={handleAlarmChange} />
            <button onClick={handleAddAlarm}>알람 추가</button>
          </div>
        </div>
      </div>
    );
  }