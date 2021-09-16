import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ tasks, onDelete }) => {
    return (
        <div className='task-container'>
            <div className="task">
                <h3>{tasks.text}
                    <FaTimes
                        className="delete-button"
                        onClick={() => onDelete(tasks.id)}
                    />
                </h3>
                <p className='date-text'>{tasks.day}</p>
            </div>
        </div>
    )
}

export default Task
