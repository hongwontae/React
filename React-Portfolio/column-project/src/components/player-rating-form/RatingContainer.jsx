/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import SingleRate from "./SingleRate";
import { RatingCtx } from "../../context/RatingContext";

/* eslint-disable no-unused-vars */
function RatingContainer() {
  const { ratings } = useContext(RatingCtx);


  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-red-500 mb-8">
          Liverpool - Rate
        </h1>
        <div className="flex gap-14">
          <div>
            <h2 className="mb-4 text-red-400">Starting - Member</h2>
            {ratings &&
              ratings.map((ele) => {
                if (ele.start_bol) {
                  return (
                    <SingleRate
                      rating={0 || ele?.rating}
                      key={ele.pId}
                      label={ele.playerName}
                      playerId={ele.pId}
                      bol={ele.start_bol}
                    ></SingleRate>
                  );
                }
              })}
          </div>
          <div>
            <h2 className="mb-4 text-red-400">Sub - Member</h2>
            {ratings &&
              ratings.map((ele) => {
                if (!ele.start_bol) {
                  return (
                    <SingleRate
                      rating={0 || ele?.rating}
                      key={ele.pId}
                      label={ele.playerName}
                      playerId={ele.pId}
                      bol={ele.start_bol}
                    ></SingleRate>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default RatingContainer;
