import React, { useState } from "react";

const DataState = ()=>{

    const [divState, setDivState] = useState('This is Anfiled');

    const divChangeHandler = ()=>{

        setDivState('This is HWT Home!!')
        console.log('Change')
    }
    

    return(
        <React.Fragment>
            <div onClick={divChangeHandler}>{divState}</div>
        </React.Fragment>
    )
}

export default DataState;