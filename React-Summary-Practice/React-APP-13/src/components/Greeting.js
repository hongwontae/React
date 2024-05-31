import { useState } from "react";

function Greeting(){

    const [data, setData] =useState(false);

    function changeTest(){
        setData(true)
    }

    return(
        <>
            <div>
                <h2>Hello World</h2>
                {!data && <p>HHHHHH</p>}
                {data && <p>PPPPP</p>}
                <button onClick={()=>changeTest(true)}>Button</button>
            </div>
        </>
    )
}

export default Greeting;