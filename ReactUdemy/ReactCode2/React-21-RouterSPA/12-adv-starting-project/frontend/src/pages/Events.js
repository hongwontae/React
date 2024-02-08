import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  const data = events.events
  console.log('events variable')
  console.log(events)

  console.log('data variable')
  console.log(data)


  if (events.isError) {
    return <p>{events.message}</p>;
  }

  return <EventsList events={data}></EventsList>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    console.log('else')
    console.log(response);
    

    return response;
  }
}
