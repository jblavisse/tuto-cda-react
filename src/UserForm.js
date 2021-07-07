import React, {useState} from 'react'

/*
Créer un formulaire pour un champ nom et un champ prénom.
Faire en sorte que lorsqu'on soumet le formulaire, ça affiche dans la console un objet:
{
   firstname: "JB",
   lastname: "Lavisse"
}
*/
export default function UserForm() {
    const [firstname,setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    function handleFirstname(e) {
        setFirstname(e.target.value);
    }

    function handleLastname(e) {
        setLastname(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname
        }
        console.log(user);
    }

//    let jbAlert;
//    if(firstname === "JB") {
//        jbAlert = <p>Alerte intrus!</p>
//     }
//    else {
//        jbAlert = <p>Tout va bien!</p>
//     } 

   // if(condition) {qqchose} else {autchose}
   // condition ? qqchose : autchose; 
   
   // v1 avec opérateur conditionnel
   // firstname === "JB" ? jbAlert = <p>Alerte intrus!</p> :  jbAlert =  <p>Tout va bien!</p>;
    
   // v2
   const jbAlert = firstname === "JB" ? <p>Alerte intrus!</p> : <p>Tout va bien!</p>


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={firstname} onChange={handleFirstname} />
            <input type="text" value={lastname} onChange={handleLastname} />
            <button type="submit">Envoyer</button>

            {/* par une variable intermédiaire  */}
            {jbAlert}

            {/* sans variable intermédiaire */}
            {firstname === "JB" ?
             <p>Alerte intrus!</p> :  <p>Tout va bien!</p>}
        </form>
    )
}
