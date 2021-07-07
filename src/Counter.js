import React, {useState} from 'react'

export default function Counter() {
    let [score, setScore] = useState(0);

    function incrementScore(event) {
        console.log(event.target);
        setScore(score+1);
    }

    return (
        <button onClick={incrementScore}>Cliqué {score} fois!</button>
    )
}
