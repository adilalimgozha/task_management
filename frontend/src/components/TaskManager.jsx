import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await fetch('http://localhost:8080/tasks');
        const data = await response.json();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks(); 
    }, []);

    return (
        <div>
            <TaskList tasks={tasks} fetchTasks={fetchTasks}></TaskList>
            <TaskForm fetchTasks={fetchTasks}></TaskForm>
        </div>
    );
}

export default TaskManager;