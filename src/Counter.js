import React from 'react'

export default function Counter() {
    function click() {
        console.log("J'ai été cliqué!")
    }

    return (
        <button onClick={click}>Cliqué x fois!</button>
    )
}
