import React from 'react'

const Header = ({ tasks, showAddTasks, setShowAddTasks }) => {

    return (
        <header className='header'>
            <h3>You have {tasks.length} tasks</h3>
            <button
                className='add-task-btn'
                onClick={() => setShowAddTasks(!showAddTasks)}
            >Add Task</button>
        </header>
    )
}

export default Header
