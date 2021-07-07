import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function CommentForm() {
    const [comments,setComments] = useState([
        {id:1, pseudo: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"},
        {id:2, pseudo: "Jean-Claude", message: "Oublies que t'as aucune chance, vas-y fonce!"}
    ])

    const [pseudo, setPseudo] = useState("");
    const [message,setMessage] = useState("");

    function handleMessage(e) {
        setMessage(e.target.value);
    }

    function createComment(e) {
        e.preventDefault();

        // const newComment = {
        //     pseudo: pseudo,
        //     message: message
        // };
        const newComment = {id:uuidv4(),pseudo, message};
        console.log(newComment);

        // ... -> spread operator
        // comments = [1,2]
        // cloneComments = [...comments] -> [1,2]

        // Récupère chaque valeur du tableau comments,
        // et ça rajoute une nouvelle valeur à la fin 
        // qui est mon nouvel objet
        const currComments = [...comments, newComment];
        console.log(currComments);

        setComments(currComments);
    }

    return (
        <div>
            <h1>Liste des commentaires ({comments.length})</h1>
            <ul>
            {comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <strong>{comment.pseudo}</strong>:
                        <p>{comment.message}</p>
                    </li>
                )
            })}
            </ul>

            <form onSubmit={createComment}>
                <input type="text" value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)} />
                <textarea value={message}
                    onChange={handleMessage}
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>

        </div>
    )
}
