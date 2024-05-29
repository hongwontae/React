import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import { useState } from "react";

export default function EventDetails() {
  
  const [modalState, setModalState] = useState(false)

  const param = useParams();
  const id = param.id;

  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ signal, id });
    },
  });
  

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/");
    },
  });

  function deleteHandler() {
    mutate({id});
  }

  function modalStartHandler(){
    setModalState(true)
  }

  function modalCloseHandler(){
    setModalState(false)
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data....</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to load Event"
        message={
          error?.info?.message ||
          "Faild to fetch event data, Please try again later"
        }
      ></ErrorBlock>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={modalStartHandler}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img
            src={`http://localhost:3000/${data.image}`}
            alt="this is Music show"
          />
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
    {modalState && <Modal onClose={modalCloseHandler}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this event? This action cannot be undone</p>
        <div className="form-actions">
      <button onClick={modalCloseHandler} className="button-text">Cancel</button>
      <button onClick={deleteHandler} className="button">Delete</button>
        </div>
      </Modal>}
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
