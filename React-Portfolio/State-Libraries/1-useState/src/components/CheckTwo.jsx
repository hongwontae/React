import { useContext } from "react";
import {CheckTwoContext} from '../context/check-two-context';


function CheckTwo(){

    const {checkContext, rootData} = useContext(CheckTwoContext);


    console.log('Check Two Components Rendering!!')

    return(
        <>
            <div>{rootData}</div>
            <button onClick={checkContext}>Check Context!</button>
        </>
    )
}

export default CheckTwo;