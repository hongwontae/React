import {Link} from 'react-router-dom'

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
function EventList({ events }) {

  

  return (
    <>
      <main>
        <ul style={{marginBottom : 50}}>
            <h1 style={{marginBottom : 50}}>This is Book Name</h1>
            {events.map((ele)=>{
              console.log(ele)
                return <>
                    <li key={ele.userId} style={{marginBottom : 15}}>{ele.title}</li>
                    <Link to={`${ele.id}`}>Hello!</Link>
                </>
            })}
        </ul>
      </main>
    </>
  );
}

export default EventList;
