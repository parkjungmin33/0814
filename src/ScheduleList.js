import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ScheduleList.css';

const initialTodo = ['일정1', '일정2', '일정3'];

function Todolist(props) {
    return (
        <li>
            {props.item}
            <button onClick={props.onDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
}

function ScheduleList() {
    const [todo, setTodo] = useState(initialTodo);
    const currentDate = new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric' });

    const handleDelete = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
    };

    return (
        <div className="centered-container">
            <div className="rounded-box">
                <div className='date-circle'>
                    <span className="date-month">{new Date().toLocaleDateString(undefined, { month: 'long' })}</span>
                    <span className="date-day">{new Date().toLocaleDateString(undefined, { day: 'numeric' })}</span>
                    <p>오늘</p>
                </div>

                <div className="schedule">
                    <h2>
                        일정 
                        <button >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </h2>
                    
                    <ul>
                        {todo.map((item, index) => (
                            <Todolist
                                key={index}
                                item={item}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ScheduleList;
