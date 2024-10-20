import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({tasks, fetchTasks}) => {

    const [checked, setChecked] = useState({})

    const deleteTask = async (taskId) => {
        await fetch(`http://localhost:8080/tasks/${taskId}`, {
            method: 'DELETE',
        });
        fetchTasks();
    };

    const checkboxChange = async (taskId, isChecked) => {
        setChecked(prevState => ({
            ...prevState,
            [taskId]: isChecked
        }));

        await fetch(`http://localhost:8080/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: isChecked ? 'Done' : 'Not Done'
            })
        });

        fetchTasks();
    };

    

    

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.ID}>
                        <h3 className={task.status === "Done" ? 'task-checked' : "task-not-checked"}>{task.title}</h3>
                        <div>
                            <input type="checkbox" 
                            checked={task.status === "Done"} 
                            onChange={(e) => checkboxChange(task.ID, e.target.checked)} 
                            name={task.title}/>
                            <Link to={`/tasks/${task.ID}`}>Details</Link>
                            <button onClick={() => deleteTask(task.ID)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;