/* eslint-disable no-unused-vars */
import { Form, useSubmit } from "react-router-dom";
import ImagePicker from "../image-picker/ImagePicker";
import { useRef, useState } from "react";
import SelectSegment from "./SelectSegment";
import PlayResultButtons from "./PlayResultButtons";

function PlayResultFormPage() {
  const [previewImage, setPreviewImage] = useState(null);
  const [pickImage, setPickImage] = useState(null);
  const [selectedData, setSelectedData] = useState('맨체스터 시티');

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const matchDayRef = useRef(null);
  const myTeamScoreRef = useRef(null);
  const opTeamRef = useRef(null);

  const submit = useSubmit();


  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("image", pickImage);
    formData.append('match_team', selectedData)
    submit(formData, {
      method: "POST",
      action: "/play-result-form",
      encType: "multipart/form-data",
    });

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    matchDayRef.current.value = "";
    myTeamScoreRef.current.value = "";
    opTeamRef.current.value = "";
    setPreviewImage(null);
    setPickImage(null);
    setSelectedData("맨체스터 시티")
  }

  function resetHandler() {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    matchDayRef.current.value = "";
    myTeamScoreRef.current.value = "";
    opTeamRef.current.value = "";
    setPreviewImage(null);
    setPickImage(null);
    setSelectedData("맨체스터 시티")
  }

  return (
    <>
      <Form
        onSubmit={submitHandler}
        className="border-[1px] p-4 w-8/12 rounded-lg bg-red-20 m-auto mb-8"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2 w-full justify-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              ref={titleRef}
              className="text-black text-center rounded-sm w-2/4 p-1"
              required
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              ref={descriptionRef}
              id="description"
              name="description"
              className="w-11/12 h-[20rem] text-black text-center rounded-lg p-2 bg-slate-400"
              required
            ></textarea>
          </div>
          <SelectSegment selectedData={selectedData} setSelectedData={setSelectedData}></SelectSegment>
          <div className="flex gap-2">
            <label htmlFor="matchDay">Match Day</label>
            <input
              type="date"
              id="matchDay"
              name="matchDay"
              ref={matchDayRef}
              className="text-black rounded-sm"
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="playResult">Score</label>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <label>My Team Score</label>
                <input
                  type="number"
                  id="playResult"
                  name="playResult"
                  ref={myTeamScoreRef}
                  required
                  className="text-black text-center rounded-sm"
                ></input>
              </div>
              <div className="flex gap-2">
                <label htmlFor="op">Opposing Team Score</label>
                <input
                  type="number"
                  className="text-black text-center rounded-sm"
                  id="op"
                  name="op"
                  ref={opTeamRef}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ImagePicker
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              pickImage={pickImage}
              setPickImage={setPickImage}
            ></ImagePicker>
          </div>
        </div>
        <PlayResultButtons resetHandler={resetHandler}></PlayResultButtons>
      </Form>
    </>
  );
}

export default PlayResultFormPage;

export async function prAction({ request, params }) {
  const formData = await request.formData();

  const response = await fetch("http://localhost:5000/post/prone", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erorror");
  }

  const resData = await response.json();

  console.log(resData);

  return { prData: "Success?" };
}
