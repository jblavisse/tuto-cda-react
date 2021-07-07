import axios from 'axios';
import React, {useState} from 'react';

export default function PostListPage() {
    // [] car je sais que l'API va me renvoyer un tableau
    // et donc, mon objectif c'est de faire correspondre
    // le type de valeur de l'état qui va stocker mes données de l'API
    // avec le type de données retourné par l'API
    const [posts, setPosts] = useState([]);

    function loadPosts() {
        console.log("Chargement des articles en cours...");
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
    }

    return (
        <div>
            <button onClick={loadPosts}>Charger des articles</button>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul> 
        </div>
    )
}
