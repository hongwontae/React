/* eslint-disable no-unused-vars */
import { Form, redirect, useLoaderData, useSubmit } from "react-router-dom";
import ImagePicker from "../../components/image-picker/ImagePicker";
import { useEffect, useRef, useState } from "react";
import ModifierSelectSegment from "../../components/play-result-form/ModifierSelectSegment";

function ModifierPage() {
  const [previewImage, setPreviewImage] = useState(null);
  const [pickImage, setPickImage] = useState(null);

  const submit = useSubmit();
  const previousData = useLoaderData();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const matchTeamRef = useRef(null);
  const matchDayRef = useRef(null);
  const myResultRef = useRef(null);
  const opResultRef = useRef(null);

  function resetHandler() {
    titleRef.current.value = "";
    matchTeamRef.current.value = "";
    matchDayRef.current.value = null;
    myResultRef.current.value = null;
    opResultRef.current.value = null;
  }

  function actionHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("image", pickImage);

    submit(formData, {
      action: `/modifier/${previousData.data.id}`,
      encType: "multipart/form-data",
      method: "POST",
    });
  }

  return (
    <>
      <h1 className="text-2xl font-extralight mb-4">Modifier Page</h1>
      <Form
        onSubmit={actionHandler}
        method="POST"
        className="border-[1px] p-4 w-8/12 rounded-lg bg-red-20 m-auto mb-8"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2 w-full justify-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="text-black text-center rounded-sm w-2/4 p-1"
              required
              defaultValue={previousData && previousData.data.title}
              ref={titleRef}
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="w-11/12 h-[20rem] text-black text-center rounded-lg p-2 bg-slate-400"
              required
              ref={descriptionRef}
              defaultValue={previousData && previousData.data.description}
            ></textarea>
          </div>
          <ModifierSelectSegment
            defaultValue={previousData && previousData.data.matchTeam}
            ref={matchTeamRef}
          ></ModifierSelectSegment>

          <div className="flex gap-2">
            <label htmlFor="matchDay">Match Day</label>
            <input
              type="date"
              id="matchDay"
              name="matchDay"
              className="text-black rounded-sm"
              defaultValue={previousData && previousData.realDate}
              required
              ref={matchDayRef}
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="playResult">Score</label>
            <div className="flex gap-4">
              <div className="flex gap-2 h-10">
                <label>My Team Score</label>
                <input
                  type="number"
                  id="playResult"
                  name="myResult"
                  required
                  className="text-black text-center rounded-sm"
                  defaultValue={
                    previousData && Number(previousData.data.myResult)
                  }
                  ref={myResultRef}
                ></input>
              </div>
              <div className="flex gap-2 h-10">
                <label htmlFor="op">Opposing Team Score</label>
                <input
                  type="number"
                  className="text-black text-center rounded-sm"
                  id="op"
                  name="opResult"
                  required
                  defaultValue={
                    previousData && Number(previousData.data.opResult)
                  }
                  ref={opResultRef}
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
              notification={
                "If you did not select a photo, it will be replaced with the previous one."
              }
            ></ImagePicker>
          </div>
          <div className="flex justify-center gap-6">
            <button
              onClick={resetHandler}
              type="button"
              className="border-[1px] p-1 rounded-lg"
            >
              Reset
            </button>
            <button type="submit" className="border-[1px] p-1 rounded-lg">
              Save
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ModifierPage;

export async function action({ request, params }) {
  const formData = await request.formData();
  console.log(params.id)

  const response = await fetch(`http://localhost:5000/act/modi/ud/${params.id}`,{
    method : 'POST',
    body : formData
  })

  if(!response.ok){
    throw new Error('요청 실패')
  }

  const resData = await response.json();

  console.log(resData)
  
  return redirect('/play-result')

}

export async function loader({ request, params }) {
  const response = await fetch(`http://localhost:5000/modify/md/${params.id}`);

  if (!response.ok) {
    throw new Error("요청 중 에러");
  }

  const resData = await response.json();
  return resData;
}
