/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {dateTransformat} from '../../../util/date-formatted'

function PlayResultSingle(props) {
  const newFormattedDate = dateTransformat(props.date)
  return (
    <>
      <div className="w-10/12 border-[1px] rounded-lg">
        <Link
          to={`/play-result/${props.playId}`}
          className="flex flex-col items-center w-full"
        >
          <li className=" p-1 flex justify-center items-center w-full h-[10rem]">
            <img
              src={`http://localhost:8080/uploads/${props.imagePath}`}
              alt={props.imagePath}
              className="w-[200px] h-full rounded-lg object-cover"
            ></img>

            <div className="flex flex-col w-full justify-center h-full overflow-hidden">
              <h2 className="h-1/3">{props.title}</h2>
              <div className="h-1/3">{newFormattedDate}</div>
              <p className="break-words h-1/3">
                {props.playDescriptionx}
              </p>
            </div>
          </li>
        </Link>
      </div>
    </>
  );
}

export default PlayResultSingle;
