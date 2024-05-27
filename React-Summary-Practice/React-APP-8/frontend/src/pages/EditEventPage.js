import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage(){

    const event = useRouteLoaderData('event-id');


    return(
        <>
            <EventForm event={event} method="PATCH"></EventForm>
        </>
    )
}

export default EditEventPage;