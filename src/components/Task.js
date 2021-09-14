import React from 'react'

const Task = ({ tasks }) => {
    return (
        <div>
            <p>{tasks.text}</p>
            <p className='date-text'>{tasks.day}</p>
        </div>
    )
}

export default Task
