import { useContext } from "react";
import { InputContext } from "../store/InputContext";

function TestComponent(){
    
    const {test} = useContext(InputContext)

    console.log(test)

    return(
        <>
            <h1>TestCompoent</h1>
        </>
    )
}

export default TestComponent;
