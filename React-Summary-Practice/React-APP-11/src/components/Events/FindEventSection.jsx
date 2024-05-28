/* eslint-disable no-unused-vars */
import { useRef } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http";
import { useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();

  const [searchTerm, setSearchTerm] = useState('')

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', {search : searchTerm}],
    queryFn: ()=> {
      console.log('this is searchTerm find')
      return fetchEvents(searchTerm)
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events</p>

  if(isPending){
    content = <LoadingIndicator></LoadingIndicator>
  }

  if(isError){
    content = <ErrorBlock title="" message={error?.info.message || 'failed to fetch data'}></ErrorBlock>
  }

  if(data){
    content = <ul className="events-list">
      {data.map(event => {
        return <li key={event.id}>
          <EventItem event={event}></EventItem>
        </li>
      })}
    </ul>
  }



  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
