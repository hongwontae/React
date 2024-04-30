import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient  } from "../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const param = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", param.id],
    queryFn: ({ signal }) => {
      return fetchEvent({ signal, id: param.id });
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate : async (data)=>{
      const newEvent = data.event

     await queryClient.cancelQueries({queryKey : ['events',param.id]})

      // mutate를 호출하는 즉시 실행된다. => mutate 프로세스가 실행되기 전(웅답 받기 전)
      // 리액트 캐시 => queryClient
      queryClient.setQueryData(['events', param.id], newEvent);
      // 응답을 기다리지 않고 내부적으로 실행 
      // 
    }
  });

  function handleSubmit(formData) {
    mutate({ id: param.id, event: formData });
    navigate('../');
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
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to loade event"}
        ></ErrorBlock>
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
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
