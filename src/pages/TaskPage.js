import {useState} from 'react';
import axios from 'axios';

export default function TaskPage() {
    const [title,setTitle] = useState("");
    const [completed,setCompleted] = useState(false);

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
            console.log(res.data);
            // Ajouter ce que je viens de recevoir dans un tableau de tâches
        })
    }

    return (
        <div>
            <h1>Créer une tâche</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={title}
                    onChange={handleTitle}
                 />
                <input type="checkbox" checked={completed} 
                    onChange={handleCompleted}
                    />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
