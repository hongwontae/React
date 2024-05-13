import { useEffect} from "react";

function Effect(){

    useEffect(()=>{
        console.log('Effect cb')
        return ()=>{
            console.log('Clean-Up -Fun')
        }
    }, [])

    return(
        <>
        <h1>Hello-World!</h1>
        </>
    )
}

export default Effect;