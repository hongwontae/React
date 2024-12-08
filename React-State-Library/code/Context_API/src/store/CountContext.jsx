/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState} from 'react';

export const CountContext = createContext({
    count : 1,
    setCountState : ()=>{}
});


export function CountContextProvider({children}){

    const [countState, setCountState] = useState({count : 1})

    const countCtx = {
        count : countState.count,
        setCountState
    }

    return(
        <>
            <CountContext.Provider value={countCtx}>{children}</CountContext.Provider>
        </>
    )
}