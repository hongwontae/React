/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CountContext } from "../store/CountContext";

function CountComponent(){

    const {count, setCountState} = useContext(CountContext);

    console.log('count-component')
    
    function clickUp(){
        setCountState(prev=>{
            return {
                count : prev.count+1
            }
        })
    }

    function clickDown(){
        setCountState(prev=>{
            return {
                count : prev.count-1
            }
        })
    }

    return(
        <>
            <h3>Count : {count}</h3>
            <button onClick={clickUp}>Up!</button>
            <button onClick={clickDown}>Down!</button>
            <button onClick={()=>setCountState(prev=>({count : 0}))}>Reset</button>
        </>
    )
}

export default CountComponent;