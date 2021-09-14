import React from 'react'

const Header = ({ tasks }) => {

    return (
        <header className='header'>
            You have {tasks.length} tasks
        </header>
    )
}

export default Header
