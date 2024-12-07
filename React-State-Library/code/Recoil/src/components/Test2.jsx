/* eslint-disable no-unused-vars */
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {testAtom, testSelector} from '../recoil-state/TestState';
import { useRef } from "react";
import {styled} from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`
const Loading = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: red;
    text-align: center;
`

function Test2 (){

    const [state, setState] = useRecoilState(testAtom);
    const selectorState = useRecoilValueLoadable(testSelector);
    const inputRef = useRef(null);


    function buttonHandler(){
        setState(inputRef.current.value)
    }

    if(selectorState.state === 'loading'){
        return <Loading>Loading...</Loading>
    }



    return(
        <>
            <Container>
                <input ref={inputRef} type="number"></input>
                <button onClick={buttonHandler}>Button!</button>
                {selectorState?.contents && <>
                    <div>Title : {selectorState.contents.title}</div>
                    <div>Body : {selectorState.contents.body}</div>
                </>}
            </Container>
        </>
    )
}

export default Test2;