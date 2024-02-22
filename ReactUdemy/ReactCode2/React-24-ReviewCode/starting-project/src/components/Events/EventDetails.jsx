import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const navi = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => {
      return fetchEvent({ signal, id: params.id });
    },
  });

  const {
    mutate,
    isPending: isMutatePending,
    isError: isMutateIsError,
    error: mutateError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navi("/events");
    },
  });

  function handleDelete() {
    mutate({ id: params.id });
  }

  function modalShow() {
    setIsDeleting(true);
  }

  function modalDown() {
    setIsDeleting(false);
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed"}
        ></ErrorBlock>
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    content = (
      <>
        {isDeleting && (
          <Modal onClose={modalDown}>
            <h2>Are you sure?</h2>
            <p>
              Do you really want to delete this event? This action can not be
              undone.
            </p>
            <div className="form-actions">
              {isMutatePending && <p>Deleting... please wait a min</p>}
              {!isMutatePending && (
                <>
                  <button onClick={modalDown} className="button-text">
                    Cancel
                  </button>
                  <button onClick={handleDelete} className="button">
                    Delete
                  </button>
                </>
              )}
              {isMutateIsError && (
                <ErrorBlock
                  title="Error"
                  message={mutateError.info?.message || "Failed"}
                ></ErrorBlock>
              )}
            </div>
          </Modal>
        )}
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={modalShow}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>

      <article id="event-details">{content}</article>
    </>
  );
}
