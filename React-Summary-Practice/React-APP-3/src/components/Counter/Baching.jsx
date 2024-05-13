import { useState } from "react";


function Baching(){

    const [data, setData] = useState(1);

    setTimeout(()=>{
        setData(data+10);
        setData(data+10);
    }, 10000)

    return(
        <>
        <div style={{textAlign: 'center'}}>
            <h3>Baching!</h3>
            <h1>{data}</h1>
            </div>
        </>
    )
}

export default Baching;