import { Form } from "react-router-dom";

function EventForm() {
  return (
    <>
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age"></input>
        </div>
        <div>
          <label htmlFor="carrier">Carrier</label>
          <input type="text" name="carrier" id="carrier"></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date"></input>
        </div>
        <button>Save</button>
      </Form>
    </>
  );
}

export default EventForm;
