/* eslint-disable react/prop-types */

import { useContext } from "react";
import SingleRate from "./SingleRate";
import { RatingCtx } from "../../context/RatingContext";

/* eslint-disable no-unused-vars */
function RatingContainer() {
  const { startingMember, substanceMember, setRating } =
    useContext(RatingCtx);

  function ratingHandler(e, playerId) {
    setRating((prev) => {
      const prevBol = prev.some((ele) => {
        return ele.playerId === playerId;
      });
      if (prevBol) {
        const copyPrev = [...prev];
        const existingPlayerIndex = prev.findIndex((ele) => {
          return ele.playerId === playerId;
        });
        copyPrev[existingPlayerIndex] = {
          playerId,
          rating: e.target.value,
        };
        return copyPrev;
      } else {
        return [
          ...prev,
          {
            playerId,
            rating: e.target.value,
          },
        ];
      }
    });
  }


  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-red-500 mb-8">
          Liverpool - Rate
        </h1>
        <div className="flex">
          <div>
            <h2 className="mb-4 text-red-400">Starting - Member</h2>
            {startingMember &&
              startingMember.map((ele, idx) => {
                return (
                  <SingleRate
                    key={ele.playerId}
                    label={ele.playerName}
                    playerId={ele.playerId}
                    startBol={ele.start_member_bol}
                    idx={idx}
                    ratingHandler={ratingHandler}
                  ></SingleRate>
                );
              })}
          </div>
          <div>
            <h2 className="mb-4 text-red-400">Sub - Member</h2>
            {substanceMember &&
              substanceMember.map((ele, idx) => {
                return (
                  <SingleRate
                    key={ele.playerId}
                    label={ele.playerName}
                    playerId={ele.playerId}
                    startBol={ele.start_member_bol}
                    idx={idx}
                    ratingHandler={ratingHandler}
                  ></SingleRate>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default RatingContainer;
