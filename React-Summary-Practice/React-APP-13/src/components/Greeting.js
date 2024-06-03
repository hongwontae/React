import { useState } from "react";
import Output from './Output'

function Greeting(){

    const [data, setData] =useState(false);

    function changeTest(){
        setData(true)
    }

    return(
        <>
            <div>
                <h2>Hello World</h2>
                {!data && <Output>HHHHHH</Output>}
                {data && <Output>PPPPP</Output>}
                <button onClick={()=>changeTest(true)}>Button</button>
            </div>
        </>
    )
}

export default Greeting;