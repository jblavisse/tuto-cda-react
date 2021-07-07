import React, {useState} from 'react'

export default function Question({title}) {
    /*
    description -> Variable qui contient la valeur actuelle
    useState("truc") -> truc: la valeur initiale de mon état
    setDescription -> Fonction qui va modifier la valeur de mon état
    */
    const [description, setDescription] = useState("Une description de base");

    function hello() {
        console.log("coucou!");

        setDescription("Ma nouvelle description");
    }

    return (
        <>
            <h2 onClick={hello}>{title}</h2>
            <p>{description}</p>
        </>
    )
}
