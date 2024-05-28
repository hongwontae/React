import { useDispatch } from "react-redux";
import { Form, redirect } from "react-router-dom";

import { boardSliceAction } from "../store/BoardSlice";
import { useRef } from "react";

function EventForm() {
  const dispatch = useDispatch();

  const title = useRef();
  const age = useRef();
  const carrier = useRef();
  const date = useRef();

  function saveHandler() {
    dispatch(
      boardSliceAction.registerReducer({
        title: title.current.value,
        age: age.current.value,
        carrier: carrier.current.value,
        date: date.current.value,
      })
    );
    return redirect("/");
  }

  return (
    <>
      <Form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            ref={title}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" ref={age} required></input>
        </div>
        <div>
          <label htmlFor="carrier">Carrier</label>
          <input
            type="text"
            name="carrier"
            id="carrier"
            ref={carrier}
            required
            minLength={6}
          ></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" ref={date} required></input>
        </div>
        <button onClick={saveHandler} style={{ padding: 7, marginTop: 20 }}>
          Save
        </button>
        <button style={{ padding: 7, marginTop: 20 }}>Home</button>
      </Form>
    </>
  );
}

export default EventForm;
