import { Form, useLocation } from "react-router-dom";
import ImagePicker from "../../components/image-picker/ImagePicker";
import { useState } from "react";
import SelectSegment from "../../components/play-result-form/SelectSegment";
import {
  dateDataFormatted,
  matchResultDivide,
} from "../../util/modifier-function";

function ModifierPage() {
  const { state } = useLocation();

  const [previewImage, setPreviewImage] = useState(null);
  const [pickImage, setPickImage] = useState(null);

  const dateData = dateDataFormatted(state.data.date);

  const resultData = matchResultDivide(state.data.result);

  const [prevData, setPrevData] = useState({
    title: state.data.title,
    description: state.data.description,
    matchday: dateData,
    matchTeam: state.data.matchTeam,
    myResult: resultData[0],
    opResult: resultData[1],
  });

  function matchmodiHandler(e) {
    setPrevData((prev) => {
      return {
        ...prev,
        matchTeam: e,
      };
    });
  }

  function onChangeUtil(e, iden, setFunc) {
    setFunc((prev) => {
      return {
        ...prev,
        [iden]: e.target.value,
      };
    });
  }

  function resetHander(){
    setPrevData({
        title : '',
        description : '',
        matchday : '',
        matchTeam : '',
        myResult : '',
        opResult : ''
    })
    setPickImage(null)
    setPreviewImage(null)
  }

  return (
    <>
      <h1 className="text-2xl font-extralight mb-4">Modifier Page</h1>
      <Form className="border-[1px] p-4 w-8/12 rounded-lg bg-red-20 m-auto mb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2 w-full justify-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={prevData.title}
              onChange={(e) => {
                onChangeUtil(e, "title", setPrevData);
              }}
              className="text-black text-center rounded-sm w-2/4 p-1"
              required
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
              value={prevData.description}
              onChange={(e) => {
                onChangeUtil(e, "description", setPrevData);
              }}
            ></textarea>
          </div>
          <SelectSegment
            selectedData={prevData.matchTeam}
            setSelectedData={matchmodiHandler}
          ></SelectSegment>

          <div className="flex gap-2">
            <label htmlFor="matchDay">Match Day</label>
            <input
              type="date"
              id="matchDay"
              name="matchDay"
              className="text-black rounded-sm"
              required
              value={prevData.matchday}
              onChange={(e) => {
                onChangeUtil(e, "matchday", setPrevData);
              }}
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
                  required
                  className="text-black text-center rounded-sm"
                  value={prevData.myResult}
                  onChange={(e) => {
                    onChangeUtil(e, "myResult", setPrevData);
                  }}
                ></input>
              </div>
              <div className="flex gap-2">
                <label htmlFor="op">Opposing Team Score</label>
                <input
                  type="number"
                  className="text-black text-center rounded-sm"
                  id="op"
                  name="op"
                  required
                  value={prevData.opResult}
                  onChange={(e) => {
                    onChangeUtil(e, "opResult", setPrevData);
                  }}
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
            <button className="border-[1px] p-1 rounded-lg" onClick={resetHander}>Reset</button>
            <button className="border-[1px] p-1 rounded-lg">Save</button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ModifierPage;

async function action({params, request}) {
    
}
