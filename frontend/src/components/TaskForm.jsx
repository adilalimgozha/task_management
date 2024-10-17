import React, { useEffect, useState } from 'react';

const TaskForm = ({fetchTasks}) => {

    const [title, setTitle] = useState("")
    const [descr, setDescr] = useState("")

    const addTask = async (e) => {
        e.preventDefault();

        await fetch ('http://localhost:8080/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: descr,
                status: 'Not Done'
              })
        })

        setTitle('');
        setDescr('');
        fetchTasks();
    }



    return (
        <form onSubmit={addTask}>
                <label htmlFor="title">Title</label>
                <input name="title"  type="text" value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <br />

                <label htmlFor="description">Description</label>
                <input name="description"  type="text"  value={descr}
                onChange={(e) => setDescr(e.target.value)}/>
                <br />

                <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm