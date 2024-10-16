/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { RatingCtx } from "../../context/RatingContext";

/* eslint-disable react/prop-types */
function SingleRate({ label, playerId, startBol, idx, ratingHandler }) {
  // data는 target 데이터만 들어온다.
  // name으로 식별할 수 있다.
  const [JSXbol, setJSXbol] = useState(false);
  const { nameChangeHandler } = useContext(RatingCtx);

  function doubleClickHandler() {
    setJSXbol(true);
  }

  function blurHandler(e) {
    setJSXbol(false);
    if (!e?.target?.value) {
      console.log("input value 에러");
      return;
    }
    nameChangeHandler(startBol, playerId, e.target.value, idx);
  }

  return (
    <>
      <div className="flex w-full mb-2 justify-center gap-4">
        {JSXbol ? (
          <input
            className="w-2/6 text-black text-center"
            onBlur={blurHandler}
          ></input>
        ) : (
          <label onDoubleClick={doubleClickHandler} className="w-4/6">
            {label}
          </label>
        )}

        <input
          type="number"
          className="w-1/6 rounded-md text-center text-black"
          max={10}
          onChange={(e)=>ratingHandler(e, playerId)}
        ></input>
      </div>
    </>
  );
}

export default SingleRate;
