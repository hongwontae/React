import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { fetchEvents } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();

  const [serachTerm, setSearch] = useState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { serachTerm }],
    queryFn: ({signal}) => {
      return fetchEvents({signal, serachTerm});
    },
    enabled : serachTerm !== undefined
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events</p>

  if (isLoading) {
    content = <LoadingIndicator></LoadingIndicator>;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "failed to fetch events"}
      ></ErrorBlock>
    );
  }

  if(data){
    content = <ul className="events-list">
      {data.map((event)=>{
        return <il key={event.id}>
          <EventItem event={event}></EventItem>
        </il>
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
