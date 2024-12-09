import {useAtom} from 'jotai';
import {SeparatedAtom} from '../store/CounterState'

function CounterComponent(){

    const [count, updateCount] = useAtom(SeparatedAtom);

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>updateCount(1)}>Up</button>
            <button onClick={()=>updateCount(-1)}>Down</button>
        </>
    )
}

export default CounterComponent;