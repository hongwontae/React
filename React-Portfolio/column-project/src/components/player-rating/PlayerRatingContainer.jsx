/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import PlayerSingle from "./PlayerSingle";

function PlayerRatingContainer({ data }) {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        {data.map((single, idx) => {
          return (
              <PlayerSingle key={idx} {...single}></PlayerSingle>
          );
        })}
      </div>
    </>
  );
}

export default PlayerRatingContainer;
