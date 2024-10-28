/* eslint-disable no-unused-vars */

import { useContext, useState, memo } from "react";
import { RatingCtx } from "../../context/RatingContext";

/* eslint-disable react/prop-types */
const SingleRate = memo(function SingleRate({label, playerId, bol, rating }) {
  // data는 target 데이터만 들어온다.
  // name으로 식별할 수 있다.
  const [JSXbol, setJSXbol] = useState(false);

  const {nameChangeHandler, ratingHandler} = useContext(RatingCtx);


  function doubleClickHandler() {
    setJSXbol(true);
  }

  function blurHandler(e) {
    setJSXbol(false);
    if (!e?.target?.value) {
      return;
    }
    nameChangeHandler(e.target.value, label, bol);
  }

  return (
    <>
      <div className="flex w-full mb-2 justify-center gap-4">
        {JSXbol ? (
          <input
            className="w-3/6 text-black text-center"
            onBlur={blurHandler}
          ></input>
        ) : (
          <label onDoubleClick={doubleClickHandler} className="w-5/6">
            {label}
          </label>
        )}

        <input
          type="number"
          className="w-1/6 rounded-md text-center text-black"
          max={10}
          min={0}
          value={rating}
          onChange={(e)=>ratingHandler(e.target.value, playerId)}
        ></input>
      </div>
    </>
  );
})

export default SingleRate;
