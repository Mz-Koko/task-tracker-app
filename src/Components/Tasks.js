import React from 'react';
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        tasks.map((task, index
            )=>(
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))
    //   <>
    //       {tasks.map((task) => (
    //           <Task key={task.id} task={task} />
    //        ))}
    //   </>
    )
}

export default Tasks