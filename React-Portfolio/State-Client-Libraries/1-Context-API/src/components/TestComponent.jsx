/* eslint-disable no-unused-vars */
import { useContext, useId } from "react";
import {InputContexxt} from '../context/InputContext'

function TestComponent(){

    const label_input_ID = useId();

    const ctx = useContext(InputContexxt);

    console.log('Hello')


    return(
        <> 
            <label htmlFor={label_input_ID}>Data Absorb</label>
            <input type="text" id={label_input_ID} onChange={ctx.titleInputHandler}></input>
            <input type="text" onChange={ctx.ageInputHandler}></input>
            <button onClick={()=>{
                console.log(ctx.inputData)
            }}>Submit</button>
        </>
    )
}

export default TestComponent;