import {useEffect, useState} from 'react';
import axios from 'axios';

export default function TaskPage() {
    const [title,setTitle] = useState("");
    const [completed,setCompleted] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setTasks(res.data));
    }, [])

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleCompleted = (e) => {
        setCompleted(e.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title,completed};

        axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
        .then(res => {
            setTasks([...tasks, res.data]);
        })
    }

    const hello = (firstname) => {
        console.log(firstname)
    }

    return (
        <div>
            <h1>Ma Todolist</h1>

            <h2>Créer une tâche</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title}
                    onChange={handleTitle}
                 />
                <input type="checkbox" checked={completed} 
                    onChange={handleCompleted}
                    />
                <button type="submit">Envoyer</button>
            </form>

            <h2 onClick={() => hello("Jean")}>Liste des tâches</h2>
            <ul>
                {tasks.map(task => 
                    <li key={task.id}>{task.title}</li>
                )}
                
            </ul>
        </div>
    )
}
