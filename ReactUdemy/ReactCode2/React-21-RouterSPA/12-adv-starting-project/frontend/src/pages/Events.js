import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const event = useLoaderData();
  const events = event.events

  return(
  <Suspense fallback={<p style={{textAlign : 'center'}}>Loading....</p>}>
    <Await resolve={events}>
      {(loadedEvents) => {
        return <EventsList events={loadedEvents}></EventsList>;
      }}
    </Await>
  </Suspense>
  );
}

export default EventsPage;

async function loadEvent() {
  
  const response = await fetch("http://localhost:8080/events",);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events
  }
}

export function loader() {
  return defer({
    events: loadEvent(),
  });
}
