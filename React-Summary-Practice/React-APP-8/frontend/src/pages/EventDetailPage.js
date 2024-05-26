import {json, redirect, useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem'

function EventDetailPage(){

    const data = useRouteLoaderData('event-id');
    

    return(
        <>
           <EventItem event={data.event}></EventItem>
        </>
    )

}
export default EventDetailPage;

export async function EventDetialLoader({request, params}){
    
    const id = params.eventId;
    const responnse = await fetch('http://localhost:8080/events/'+id)

    if(!responnse.ok){
        json({message : 'resource not!'}, {
            status : 500,
            statusText : '이건 이벤트 디테일 페이지의 get의 에러입니다.'
        })
    }

    return responnse;
}

export async function EventDetailAction({request, params}){
    const param = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+param, {
        method : request.method
    });

    if(!response.ok){
        throw json({message : 'delete error'}, {
            status : 500,
            statusText : 'not Delete'
        })
    };
    return redirect('/events');
}