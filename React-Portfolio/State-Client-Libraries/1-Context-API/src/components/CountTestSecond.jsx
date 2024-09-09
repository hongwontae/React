import { useContext } from "react";
import {CounterContext} from '../context/CounterContext'

function CountTestSecond(){

    const ctx = useContext(CounterContext)

    return(
        <>
            <div>
                <h2>Count Test Second</h2>
                <p>
                    {ctx.counter}
                </p>
            </div>
        </>
    )
}

export default CountTestSecond;