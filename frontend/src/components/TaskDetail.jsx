import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const TaskDetail = ({tasks}) => {

    const {id} = useParams()
    const task = tasks.find(t => t.ID === parseInt(id))


    return(
        <div>
            <h2>Task Details</h2>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>

            <Link to={`/tasks/${task.ID}/edit`}>Edit</Link>
            <br />
            <Link to={"/"}>Back</Link>
            
        </div>
    )
}

export default TaskDetail