/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function PlayResultSingle(props) {
  const propsDate = new Date(props.date);

  const formattedDate = new Intl.DateTimeFormat("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const newFormattedDate = formattedDate.format(propsDate);

  return (
    <>
      <div className="w-10/12 border-[1px] rounded-lg">
        <Link
          to={`/play-result/${props.id}`}
          className="flex flex-col items-center"
        >
          <li className=" p-4 flex items-center  gap-4 w-full h-[10rem]">
            <img
              src={`http://localhost:5000/${props.imagePath}`}
              alt={props.imagePath}
              className="w-[200px] h-full rounded-lg object-cover"
            ></img>

            <div className="flex flex-col gap-2 w-full justify-center h-full">
              <h2>{props.title}</h2>
              <div>{newFormattedDate}</div>
              <p className="h-full  overflow-hidden">
                {props.description}
              </p>
            </div>
          </li>
        </Link>
      </div>
    </>
  );
}

export default PlayResultSingle;
