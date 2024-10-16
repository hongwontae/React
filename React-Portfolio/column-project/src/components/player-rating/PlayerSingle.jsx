import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function PlayerSingle(props) {
  const propsArr = Object.values(props);
  console.log(propsArr);

  const formattedDate = propsArr[0].ratingDate.slice(0, 10);

  return (
    <>
      <section className="border-[1px] w-3/5 p-8 rounded-md">
        <Link to={`/player-rating/result/${formattedDate}`}>
          <div className="flex justify-center gap-8 items-center w-full">
            <div className="w-1/2">
              <div className="text-red-500">{formattedDate} - Rating</div>
              <div>{propsArr[0].ratingOppenent}</div>
            </div>
            <div className="overflow-hidden w-1/2">
              <div className="text-red-400">Description</div>
              <div className="whitespace-normal">{propsArr[0].ratingDescription}</div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default PlayerSingle;
