/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form } from "react-router-dom";
import SelectSegment from "../play-result-form/SelectSegment";
import RatingContainer from "./RatingContainer";
import { useSubmit } from "react-router-dom";
import { useContext, useRef } from "react";
import { RatingCtx } from "../../context/RatingContext";

function PlayerRatingForm({ selectedData, SetSelectedData, actionData }) {
  const { rating } = useContext(RatingCtx);

  const submit = useSubmit();
  const matchDayRef = useRef(null);
  const rtDescriptionRef = useRef(null);

  function submitHandler() {
    const matchDayCheck =
      matchDayRef.current.value !== "" &&
      matchDayRef.current.value.trim() !== 0;
    const ratingDescriptionCheck =
      rtDescriptionRef.current.value !== "" &&
      rtDescriptionRef.current.value.trim() !== 0;
    const matchTemaCheck =
        selectedData !== '' && selectedData.trim() !== 0
    const ratingCheck = rating.length !== 0 && rating.length >= 11

    if(!(matchDayCheck && ratingDescriptionCheck && matchTemaCheck && ratingCheck)){
        console.log('유효한 문자열이 아닙니다.')
        return;
    }
    console.log('유효한 문자열입니다.')

    const formData = new FormData();
    formData.append("matchDay", matchDayRef.current.value);
    formData.append("ratingDescription", rtDescriptionRef.current.value);
    formData.append("matchTeam", selectedData);
    formData.append("ratings", JSON.stringify(rating));

    submit(formData, {
        method : 'POST',
        action : ''
    })
  }

  return (
    <>
      <Form className="border-[1px] p-8 w-8/12 rounded-lg bg-red-20 m-auto mb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8 justify-center">
            <div className="flex gap-2 w-full">
              <label htmlFor="matchDay" className="w-3/4">
                Match Day
              </label>
              <input
                type="date"
                id="matchDay"
                name="matchDay"
                className="text-black rounded-sm w-4/6 h-8 text-center"
                required
                ref={matchDayRef}
              ></input>
            </div>
            <div className="w-full">
              <SelectSegment
                selectedData={selectedData}
                setSelectedData={SetSelectedData}
              ></SelectSegment>
            </div>
          </div>

          <div className="flex justify-center border-[1px] p-4 rounded-lg w-full">
            <RatingContainer></RatingContainer>
          </div>

          {actionData && <div>{actionData}</div>}

          <div className="flex flex-col gap-2 w-full items-center">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="w-11/12 h-[20rem] text-black text-center rounded-lg p-2 bg-slate-400"
              required
              ref={rtDescriptionRef}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-4">
          <button className="border-[1px] rounded-md p-2" type="button">
            Reset
          </button>
          <button
            className="border-[1px] rounded-md p-2"
            type="button"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

export default PlayerRatingForm;
