import { useContext } from "react";
import { RequestContext } from "../store/RequestContext";
;import {styled} from 'styled-components';

const Loading = styled.div`
    text-align: center;
    color: red;
    font-size: 2rem;
`

function RequestComponent(){

    const {data, error, loading, downHandler} = useContext(RequestContext);

    console.log(data)

    if(loading){
        return <Loading>Loading...</Loading>
    }

    if(error){
        console.log(error)
        return <div>Error..</div>
    }

    return(
        <>
            <h3>Request-Component</h3>
            {data && data.map((ele)=>{
                return <div key={ele.id}>{ele.title}</div>
            })}
            <button onClick={downHandler}>Down</button>
        </>
    )

}

export default RequestComponent;