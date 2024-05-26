/* eslint-disable no-throw-literal */
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function Eventloader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
      throw new Response(JSON.stringify({message : 'Could not find message'}), {status : 500});
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
