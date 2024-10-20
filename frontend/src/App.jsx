import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskManager from './components/TaskManager';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import TaskEdit from './components/TaskEdit';

const App = () => {
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
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TaskManager tasks={tasks} fetchTasks={fetchTasks}/>} />
                    <Route path="/add" element={<TaskForm fetchTasks = {fetchTasks}/>} />
                    <Route path="/tasks/:id" element={<TaskDetail tasks={tasks}/>} />
                    <Route path="/tasks/:id/edit" element={<TaskEdit tasks={tasks} fetchTasks = {fetchTasks}/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
