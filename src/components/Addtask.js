import React from 'react'
import { useState } from 'react'

const Addtask = ({ showAddTasks, onAdd }) => {
    // Need to store the state of the values
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ text, day })
        setText('')
        setDay('')
    }

    return (
        <form onSubmit={onSubmit} className={!showAddTasks ? 'add-form hidden' : 'add-form'}>
            <div className="form-input">
                <label htmlFor="">Task Name:</label>
                <input
                    type="text"
                    placeholder="Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="">Day and Time:</label>
                <input
                    type="text"
                    placeholder="Date"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="">Set Reminder:</label>
                <input type="checkbox" />
            </div>
            <input type="submit"
            />
        </form>
    )
}

export default Addtask
