import {useEffect, useState} from 'react';
import axios from 'axios';
import './TaskPage.css';

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

    const deleteTask = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            console.log(id);

            // On va filtrer notre liste, on va garder
            // uniquement les tâches dont l'id est différent de celui
            // qu'on a en paramètre de notre fonction
            // filter
            const filteredTasks = tasks.filter(task => task.id !== id)
            setTasks(filteredTasks);
        })
    }

    const updateTask = (task) => {
        console.log(`La tâche numéro ${task.id} va être ${task.completed ? 'décomplétée': 'complétée'}`)
        // false -> true
        // true -> false
        task.completed = !task.completed;

        axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task)
        .then(res => {
            console.log(res);


            // Faire une copie de tasks (indice: ...)
            
            // Trouver l'index de l'élément dans la copie de mon tableau qui correspond
            // à ma tâche -> méthode findIndex
            
            // Modifier l'élément grâce à son index
            // untableau[9] = qqchose

            // Vous allez mettre à jour votre état avec la copie du tableau
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
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        {task.title} 
                         
                        <button onClick={() => updateTask(task)}>
                            {task.completed ? "Décompléter" : "Compléter" }
                        </button>
                        
                        <button onClick={() => deleteTask(task.id)}>Supprimer</button>
                    </li>
                )}
                
            </ul>
        </div>
    )
}
