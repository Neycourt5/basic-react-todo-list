import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'

function App() {
  const [tasks, addTask] = useState([{
    id: 1,
    text: 'Doctor Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }
  ])

  // Holds the state of a boolean that controls the visibility of the form
  const [showAddTasks, setShowAddTasks] = useState(false)

  // Clicking the delete button will supply the function with the id
  const onDelete = (id) => addTask(tasks.filter((task) => task.id !== id))

  // Add a task to the list of tasks
  const onAdd = (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task }
    addTask({ ...tasks, newTask })
    console.log(newTask)
  }

  console.log(tasks)

  return (
    <div className="container">
      <Header
        tasks={tasks}
        showAddTasks={showAddTasks}
        setShowAddTasks={setShowAddTasks}
      />
      <Addtask
        showAddTasks={showAddTasks}
        tasks={tasks}
        onAdd={onAdd}
      />
      <Tasks
        tasks={tasks}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
