import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage(){

    return(
        <>
            <EventForm></EventForm>
        </>
    )
}
export default NewEventPage;


export async function NewEventAction({request, params}){
    console.log('action')
    const data = await request.formData();
    const event = {
        title : data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    };
    const response = await fetch('http://localhost:8080/events', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(event)
    })
    
    if(response.status === 424){
        return response
    }


    if(!response.ok){
        throw json({message : 'post not'}, {
            status : 500,
            statusText : 'post not 500'
        })
    }
    return redirect('/events')
}