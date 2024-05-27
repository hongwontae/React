import {useParams} from 'react-router-dom'

function GetOne(){

    const param = useParams();
    const id = param.getId

    return(
        <>
            <h1>Get One!</h1>
            <p>{id}</p>
        </>
    )
}

export default GetOne;