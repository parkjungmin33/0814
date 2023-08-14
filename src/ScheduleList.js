import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ScheduleList';

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
                <h2>{currentDate}</h2>
                <p>오늘</p>

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
