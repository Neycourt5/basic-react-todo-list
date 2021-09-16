import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <div className='tasks-container'>
            {tasks.map(task => <div><Task
                tasks={task}
                onDelete={onDelete}
            /></div>)}
        </div>
    )
}

export default Tasks
