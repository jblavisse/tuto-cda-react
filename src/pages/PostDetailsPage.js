import React from 'react'
import {useParams} from 'react-router-dom';

export default function PostDetailsPage() {
    const {id} = useParams();

    /* 
    Il faudrait qu'au montage du composant, on vienne questionner
    l'API https://jsonplaceholder.typicode.com/posts/2
    où 2 serait la variable id
    Puis on récupère le résultat, on le stocke dans un état,
    et on affiche les données dans le return 
    */
    
    return (
        <div>
            <h1>Article numéro {id}</h1>
            <h2>Je suis un titre!</h2>
            <p>lorem</p>
        </div>
    )
}
