/* eslint-disable react/prop-types */
import { useEffect} from "react";

function Effect({sss}){

    useEffect(()=>{
        console.log('Effect cb')
        return ()=>{
            console.log('Clean-Up -Fun')
        }
    }, [sss])

    console.log('Effect 안')

    return(
        <>
        <h1>Hello-World!</h1>
        </>
    )
}

export default Effect;