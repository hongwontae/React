import {createContext, useState} from 'react'

export const ButtonContext = createContext({
    data : '',
    chnageData : ()=>{}
});

export default function ButtonContextProvider({children}){

    const [data, setData] = useState('Button-Click-And-Change');

    function chnageData(data){
        setData(data)
    }

    let bCtx = {
        data,
        chnageData
    }

    return(
        <>
            <ButtonContext.Provider value={bCtx}>{children}</ButtonContext.Provider>
        </>
    )

}