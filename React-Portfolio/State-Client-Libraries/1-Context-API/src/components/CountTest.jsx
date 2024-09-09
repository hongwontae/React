import { useContext } from "react";
import {CounterContext} from '../context/CounterContext'

function CountTest(){

    const ctx = useContext(CounterContext);


    return(
        <>
            <div>
                <h2>Count Test First</h2>
                <div>
                    <p>{ctx.counter}</p>
                    <button onClick={ctx.incrementHandler}>Up</button>
                    <button onClick={ctx.decrementHandler}>Down</button>
                </div>
            </div>
        </>
    )
}

export default CountTest;