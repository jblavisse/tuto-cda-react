import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Comment from './Comment';
import './CommentsList.css';

export default function CommentsList() {
    const [comments,setComments] = useState([]);

    useEffect(()=> {
        console.log("CommentsList monté");
        loadComments();
    }, []);

    function loadComments() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            setComments(res.data)
        })
    }

    return (
        <div>
            <button onClick={loadComments} className="comments__btn">Charger les commentaires</button>
            <ul>
                {comments.map(comment =>
                <li>
                    <Comment email={comment.email} body={comment.body} />
                </li>
            )}
            </ul>
        </div>
    )
}
