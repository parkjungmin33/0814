import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import './App.css'; // Import your CSS file for styling

function App() {
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
      
      <div className="input-section alarms-list">
        {alarms.map((alarm, index) => (
          <AlarmItem key={index} alarm={alarm} />
        ))}
      </div>
    </div>
  );
}

export default App;

/* 일정을 추가하는 부분
import React from 'react';
import './style.css';
import TodoApp from './TodoApp'; 

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
*/