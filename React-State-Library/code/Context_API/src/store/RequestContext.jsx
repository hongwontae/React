/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

export const RequestContext  = createContext({
    error : null,
    data : null,
    loading : null,
    downHandler : ()=>{}
})


export function RequestContextProvider({children}){

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            setLoading(true);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const resData = await response.json()
                setData(resData)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    function downHandler(){
        setData(null)
    }

    const reCtx = {
        data,
        error,
        loading,
        downHandler
    }
    


    return(
        <>
            <RequestContext.Provider value={reCtx}>{children}</RequestContext.Provider>
        </>
    )
}