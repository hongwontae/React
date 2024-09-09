/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext, useState} from 'react';

export const CounterContext = createContext({
    counter : 0,
    incrementHandler : ()=>{},
    decrementHandler : ()=>{},
    inputData : {},
    titleExtractHandler : ()=>{}
});

export const CounterContextProvider = ({children})=>{
    const [counter, setCounter] = useState(0);
    const [inputData, setInputData] = useState({
        title : '',
    });

    function incrementHandler(){
        setCounter((prev)=>{
            return prev+1
        })
    }

    function decrementHandler(){
        setCounter(prev => {
            return prev-1
        })
    }

    function titleExtractHandler(e){
        setInputData(prev => {
            return {
                ...prev,
                title : e.target.value
            }
        })
    }


    const counterCtx = {
        counter,
        incrementHandler,
        decrementHandler,
        inputData,
        titleExtractHandler,
    }

    return(
        <CounterContext.Provider value={counterCtx}>{children}</CounterContext.Provider>
    )
}

