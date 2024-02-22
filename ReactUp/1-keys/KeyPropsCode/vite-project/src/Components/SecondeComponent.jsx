import { useState } from "react";

function SecondeComponent({initialValue}){

    const [data, setData] = useState(initialValue)

    return(
        <>
        <div>
            DataSecond
            {data}
        </div>
        </>
    )
}

export default SecondeComponent;