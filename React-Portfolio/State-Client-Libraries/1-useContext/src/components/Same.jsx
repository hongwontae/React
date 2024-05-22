import { useContext } from "react";
import { CheckContext } from "../context/CheckContext";

function Same(){

    const {check} = useContext(CheckContext)

    return(
        <>
            <div>{check}</div>
        </>
    )
}

export default Same;