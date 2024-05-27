import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from '../components/EventsList'


function EventsPage() {

  const {events} = useLoaderData();


  return (
    <>
      <Suspense fallback={<p style={{textAlign : 'center'}}>Loading....</p>}>
        <Await resolve={events}>
          {(loaderData)=>{
            return <EventsList events={loaderData}></EventsList>
          }}
        </Await>
      </Suspense>
    </>
  )
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if(!response.ok){
    throw json({message : 'could not find page'}, {
      status : 500,
      statusText : 'rrd의 json 응답 에러 객체'
    })
  } else {
    const resData = await response.json();
    return resData.events

  }
}

export function Eventloader() {
  return defer({
    events : loadEvents()
  })
}
