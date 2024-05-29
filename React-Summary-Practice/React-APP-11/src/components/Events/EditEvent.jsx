/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";

import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import NewEvent from "./NewEvent.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.id;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ signal, id });
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newData = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", { id }] });
      const previousData = queryClient.getQueryData(["events", { id }]);
      queryClient.setQueryData(["events", { id }], newData);

      return { previousData };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", { id }], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["events", { id }],
        refetchType: "none",
      });
    },
  });

  function handleSubmit(formData) {
    console.log(formData);
    mutate({ id: id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator></LoadingIndicator>
      </div>
    );
  }

  if (isError) {
    <>
      <ErrorBlock
        title="Failed to load event"
        message={error?.info.message || "fail to load Event"}
      ></ErrorBlock>
      <div className="for-actions">
        <Link to={"../"} className="button">
          Okay
        </Link>
      </div>
    </>;
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
