import { useEffect } from 'react';
import {RequestThunk} from '../slice/RequestThunk';
import {useDispatch, useSelector} from 'react-redux'

function RequestComponent(){

    const request = useSelector(state=>state.request);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(RequestThunk())
    }, [dispatch])

    if(request.loading){
        return <div>Loading...</div>
    }

    if(request.error){
        return <div>Error....</div>
    }

    console.log(request)


    return(
        <>
            <h4>Request - Component</h4>
            <div>{request.data && request.data.id}</div>
            <div>{request.data && request.data.name}</div>
            <div>{request.data && request.data.username}</div>
            <div>{request.data && request.data.email}</div>
            <div>{request.data && request.data.phone}</div>

        </>
    )
}

export default RequestComponent;