import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const TaskEdit = ({tasks, fetchTasks}) => {

    const {id} = useParams()
    const task = tasks.find(t => t.ID === parseInt(id))

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDesc(task.description);
        }
    }, [task]);

    const handleEdit = async (e) => {
        e.preventDefault();

        await fetch (`http://localhost:8080/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: desc
              })
        })

        fetchTasks()
        navigate(`/tasks/${id}`)
    }
    
 
    return(
        <div>
            <form onSubmit={handleEdit}>
                <label htmlFor="title">Title</label>
                <input name="title"  type="text" value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <br />

                <label htmlFor="description">Description</label>
                <input name="description"  type="text"  value={desc}
                onChange={(e) => setDesc(e.target.value)}/>
                <br />

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default TaskEdit