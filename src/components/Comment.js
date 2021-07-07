import React, {useEffect} from 'react'
import './Comment.css';
import {Link} from "react-router-dom";

export default function Comment({email, body}) {
    useEffect(()=> {
        console.log("Comment monté");
    }, []);

    return (
        <>
            <strong className="comment__email">{email}</strong>:
            <Link to="/article">Voir l'article en question</Link>

            <p className="comment__body">{body}</p>
            
        </>
    )
}

