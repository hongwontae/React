/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form } from "react-router-dom";
import SelectSegment from "../play-result-form/SelectSegment";
import RatingContainer from "./RatingContainer";
import { useSubmit } from "react-router-dom";
import { useContext, useRef } from "react";
import { RatingCtx } from "../../context/RatingContext";

function PlayerRatingForm({ selectedData, SetSelectedData, actionData, setActionData }) {
  const { ratings, setRatings } = useContext(RatingCtx);

  const submit = useSubmit();
  const matchDayRef = useRef(null);
  const rtDescriptionRef = useRef(null);
  const titleRef = useRef(null);

  function submitHandler() {
    const matchDayCheck =
      matchDayRef.current.value !== "" &&
      matchDayRef.current.value.trim() !== 0;

    const ratingDescriptionCheck =
      rtDescriptionRef.current.value !== "" &&
      rtDescriptionRef.current.value.trim() !== 0;

    const matchTemaCheck = selectedData !== "" && selectedData.trim() !== 0;
    const ratingCheck = ratings.length !== 0 && ratings.length >= 24;
    const titleCheck =
      titleRef.current.value !== "" && titleRef.current.value.trim() !== 0;

    if (
      !(
        matchDayCheck &&
        ratingDescriptionCheck &&
        matchTemaCheck &&
        ratingCheck &&
        titleCheck
      )
    ) {
      console.log("유효한 문자열이 아닙니다.");
      return;
    }
    console.log("유효한 문자열입니다.");

    const formData = new FormData();
    formData.append("matchDay", matchDayRef.current.value);
    formData.append("ratingDescription", rtDescriptionRef.current.value);
    formData.append("matchTeam", selectedData);
    formData.append("title", titleRef.current.value);

    // 배열 데이터이기 떄문에 JSON화 하여 formData로 변환한다.
    // => 데이터를 잃지 않는다.
    formData.append("ratings", JSON.stringify(ratings));

    submit(formData, {
      method: "POST",
    });
  }

  async function resetHandler() {
    matchDayRef.current.value = null;
    rtDescriptionRef.current.value = null;
    titleRef.current.value = null;
    SetSelectedData("맨체스터 시티");
    const ratings = await (
      await fetch("http://localhost:8080/player/all")
    ).json();
    setRatings([...ratings.start, ...ratings.sub]);
    setActionData([]);
  }

  return (
    <>
      <Form className="border-[1px] p-8 w-8/12 rounded-lg bg-red-20 m-auto mb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-red-400 font-bold" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="text-black rounded-sm text-center w-full m-atuo"
                ref={titleRef}
                required
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="matchDay" className="text-red-400 font-bold">
                Match Day
              </label>
              <input
                type="date"
                id="matchDay"
                name="matchDay"
                className="text-black rounded-sm text-center w-1/2 m-auto"
                required
                ref={matchDayRef}
              ></input>
            </div>
            <div className="w-full">
              <SelectSegment
                playr={"playr"}
                selectedData={selectedData}
                setSelectedData={SetSelectedData}
              ></SelectSegment>
            </div>
          </div>

          <div className="flex justify-center border-[1px] p-4 rounded-lg w-full">
            <RatingContainer></RatingContainer>
          </div>

          <div className="flex flex-col gap-2 w-full items-center">
            <label htmlFor="description" className="text-red-400 font-bold">
              Description
            </label>
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
        <div className="mb-2 mt-4 flex flex-col gap-2 text-red-500 font-bold">
          {actionData &&
            actionData.map((ele) => {
              console.log(ele);
              return <div key={ele.path}>{ele.msg}</div>;
            })}
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button
            className="border-[1px] rounded-md p-2"
            type="button"
            onClick={resetHandler}
          >
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
