import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

export default function PostDetailsPage() {
    const {id} = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(res => setPost(res.data))
    }, [id])
    
    return (
        <div>
            <h1>Article numéro {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}
