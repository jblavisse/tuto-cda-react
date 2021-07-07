import React, {useEffect} from 'react'
import './Comment.css';

export default function Comment({email, body}) {
    useEffect(()=> {
        console.log("Comment monté");
    }, []);

    return (
        <>
            <strong className="comment__email">{email}</strong>:
            <p className="comment__body">{body}</p>
        </>
    )
}

