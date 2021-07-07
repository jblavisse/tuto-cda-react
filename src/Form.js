import React, {useState} from 'react'

export default function Form() {
    const [age, setAge] = useState("17");

    function handleAge(event) {
        setAge(event.target.value);
    }

    function handleSubmit(event) {
        // Prévenir le fonctionnement par défaut
        // de ma balise form qui est de recharger la page
        // à la soumission
        event.preventDefault();
        console.log(age);
    }

    // onSubmit, click d'un bouton submit fonctionne
    // mais aussi l'appui de la touche entrée
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} 
                onChange={handleAge}
            />
            <button type="submit">Envoyer</button>
        </form>
    )
}
