/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {createContext, useState} from 'react';

export const InputContext = createContext({
    name : '',
    age : '',
    test : '',
    setInputState : ()=>{}
});

export function InputContextProvider({children}){


    const [inputState, setInputState] =useState({
        name : '',
        age : ''
    })

    const [testState, setTestState] = useState('test')

    const inputCtx = {
        name : inputState.name,
        age : inputState.age,
        test : testState,
        setInputState
    }

    return(
        <>
            <InputContext.Provider value={inputCtx}>{children}</InputContext.Provider>
        </>
    )
}