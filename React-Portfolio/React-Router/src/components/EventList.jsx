import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
function EventList({ events }) {
  return (
    <>
      <main>
        <ul style={{ marginBottom: 50 }}>
          <h1 style={{ marginBottom: 50 }}>This is Book Name</h1>
          {events.map((ele) => {
            return (
              <>
                <li>
                  <Link to={`${ele.id}`}>{ele.title}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default EventList;
