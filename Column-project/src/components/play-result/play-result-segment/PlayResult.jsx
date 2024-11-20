/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { PageCtx } from "../../../context/PageContext";
import CustomModal from "../../../components/modal/CustomModal";
import { dateTransformat } from "../../../util/date-formatted";

function PlayResult() {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const dateData = dateTransformat(loaderData.getOneResData.data.date);

  const { isAuth, setIsAuth } = useContext(PageCtx);

  useEffect(() => {
    if (loaderData.au.jStatus === false) {
      setIsAuth(false);
    }
    if (loaderData.au.jStatus === true) {
      setIsAuth(true);
    }
  }, [loaderData?.au?.jStatus, setIsAuth]);

  function modifierHandler() {
    navigate(`/modifier/${loaderData.getOneResData.data.playId}`);
  }

  function ModalOpenHandler() {
    modalRef.current.showModal();
  }
  function ModalCloseHandler() {
    modalRef.current.close();
  }

  return (
    <>
      <CustomModal
        ref={modalRef}
        close={ModalCloseHandler}
        title={loaderData.getOneResData.data.title}
        id={loaderData.getOneResData.data.playId}
        url={'play-result'}
        path={'play-result'}
      ></CustomModal>
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center border-[1px] rounded-md pt-4 pr-8 pl-8 pb-10 gap-5 w-3/5">
          <h1 className="text-red-500 text-4xl font-bold">
            {loaderData.getOneResData.data.title}
          </h1>
          <div className="flex gap-4 items-center justify-center w-full">
            <img
              className="w-2/3 h-[25rem] rounded-lg"
              src={`http://localhost:8080/uploads/${loaderData.getOneResData.data.imagePath}`}
              alt={loaderData.getOneResData.data.imagePath}
            ></img>
            <div className="flex flex-col gap-2 w-1/3 ">
              <div className="text-red-500 font-bold text-2xl">Summary</div>
              <div className="flex flex-col gap-4 border-[1px] p-6 rounded-lg">
                <div>{dateData}</div>
                <div>리버풀 vs {loaderData.getOneResData.data.matchTeam}</div>
                <div>
                  {loaderData.getOneResData.data.myScore} :{" "}
                  {loaderData.getOneResData.data.opponentScore}
                </div>
              </div>
              {isAuth ? (
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    type="button"
                    className="border-[1px] p-1 rounded-md"
                    onClick={modifierHandler}
                  >
                    Modify
                  </button>
                  <button
                    type="button"
                    className="border-[1px] p-1 rounded-md"
                    onClick={ModalOpenHandler}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <p className="text-base break-words">
              {loaderData.getOneResData.data.playDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayResult;

export async function resultOneLoader({ request, params }) {
  const id = params.id;

  const [getOneResponse, authData] = await Promise.all([
    fetch(`http://localhost:8080/play-result/one?id=${id}`),
    fetch("http://localhost:8080/admin/credential", {
      method: "POST",
      credentials: "include",
    }),
  ]);

  if (!getOneResponse.ok || !authData.ok) {
    throw new Response(JSON.stringify({ message: "play-result http fail" }), {
      status: 404,
      statusText: "filed",
    });
  }

  const getOneResData = await getOneResponse.json();
  const au = await authData.json();

  return {
    getOneResData,
    au,
  };
}
