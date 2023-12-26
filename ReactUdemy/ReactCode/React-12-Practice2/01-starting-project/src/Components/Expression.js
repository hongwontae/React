import React, { useRef, useState } from 'react';
import Button from '../Children/Button';


const Expression = ()=>{

    const [data, setData] = useState('InitialData')

    const divRef = useRef();

    console.log(divRef)

    const clickHandler = ()=>{
        setData('HWT King')
    }

    return(
        <React.Fragment>
            <div ref={divRef}>Good Boy</div>
            <div>
                {data}
            </div>
            <Button onClick={clickHandler}>Button</Button>
        </React.Fragment>
    )
}

export default Expression;