import {useParams} from 'react-router-dom'

function EventDetailPage(){

    const params = useParams();
    const param = params.eventId;
    

    return(
        <>
            <h1>EventDetailPage</h1>
            <p>{param}</p>
        </>
    )

}
export default EventDetailPage;