import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';

const TaskManager = ({tasks, fetchTasks}) => {

    return (
        <div>
            <TaskList tasks={tasks} fetchTasks={fetchTasks}></TaskList>
        
            <Link to="/add">Add New Task</Link>
        </div>
    );
}

export default TaskManager;