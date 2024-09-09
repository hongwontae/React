/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";

function PlayResult() {
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const propsDate = new Date(data.date);

  const formattedDate = new Intl.DateTimeFormat("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const newFormattedDate = formattedDate.format(propsDate);

  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center border-[1px] rounded-md pr-12 pl-12 pb-12 pt-6 gap-5">
          <h1 className="text-red-800 text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-4 items-center">
            <img
              className="w-[35rem] h-[25rem] rounded-lg"
              src={`http://localhost:5000/${data.imagePath}`}
              alt={data.imagePath}
            ></img>
            <div className="flex flex-col gap-2">
              <div className="text-red-700 font-bold text-2xl">Summary</div>
              <div className="flex flex-col gap-4 border-[1px] p-6 rounded-lg text-red-500">
                <div>{newFormattedDate}</div>
                <div>리버풀 vs {data.matchTeam}</div>
                <div>{data.playResult}</div>
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-left whitespace-pre-wrap">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default PlayResult;

export async function resultOneLoader({ request, params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:5000/get/prone/${id}`);

  if (!response.ok) {
    throw new Error("Failed one fetching data");
  }

  const resData = await response.json();

  return resData;
}
