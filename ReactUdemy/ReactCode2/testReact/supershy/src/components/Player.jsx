import React from "react"
import { useRef } from "react"
import { useState } from "react"

const Player = ()=>{

    // const [playerName, setPlayerName] = useState('')
    // const [submitted, setSubmitted] = useState(false)

    // const inputHandler = (e)=>{
    //     setPlayerName(e.target.value)
    // }

    // const buttonHandler = ()=>{
    //     setSubmitted(true)
    // }

    const input = useRef()

    const [nameChangeHandler, setNameChangeHandler] = useState('');

    const chnageHandler = ()=>{
        setNameChangeHandler(input.current.value)
    }

    return(
        <React.Fragment>
            <section id="player">
                <h2>Welcome to {nameChangeHandler ? nameChangeHandler : 'Unknown Player'}</h2>
                <p>
                    <input type="text" ref={input} ></input>
                    <button onClick={chnageHandler}>Set Name</button>
                </p>
            </section>
            
            
        </React.Fragment>
    )
}

export default Player