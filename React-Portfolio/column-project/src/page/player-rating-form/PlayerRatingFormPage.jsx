/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import {
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router";
import PlayerRatingForm from "../../components/player-rating-form/playerRatingForm";
import { RatingCtx } from "../../context/RatingContext";
import { PageCtx } from "../../context/PageContext";

function PlayerRatingFormPage() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(PageCtx);


  const acData = useActionData();

  const [selectedData, setSelectedData] = useState("맨체스터 시티");
  const [actionData, setActionData] = useState([]);

  const { setRatings } = useContext(RatingCtx);

  const loaderData = useLoaderData();
  const startMember = loaderData.playerData.start;
  const subMember = loaderData.playerData.sub;


  useEffect(() => {
    setRatings([...startMember, ...subMember])
  }, [loaderData]);

  useEffect(() => {
    if (loaderData.authData.jStatus === false) {
      setIsAuth(false);
      navigate("/");
    }
    if (loaderData.authData.jStatus === true) {
      setIsAuth(true);
    }
    if(actionData?.status === false){
      setIsAuth(false);
      navigate('/')
    }
  }, [loaderData, navigate, actionData]);

  useEffect(() => {
    setActionData(acData?.validatorResult);
  }, [acData]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-red-700">Player Rating Form</h1>
        <PlayerRatingForm
          selectedData={selectedData}
          SetSelectedData={setSelectedData}
          actionData={actionData}
          setActionData={setActionData}
        ></PlayerRatingForm>
      </div>
    </>
  );
}

export default PlayerRatingFormPage;

export async function loader() {
  const [authResponse, playerResponse] = await Promise.all([
    fetch("http://localhost:8080/admin/credential", {
      method: "POST",
      credentials: "include",
    }),
    fetch("http://localhost:8080/player/all"),
  ]);

  const authData = await authResponse.json();
  const playerData = await playerResponse.json();

  if (!authResponse.ok || !playerResponse.ok) {
    throw new Response(JSON.stringify({ message: "http 전송 중 에러" }), {
      status: 404,
      statusText: "new Response로 만든 에러",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  if (playerData.status === false) {
    throw json(
      {
        message: "응답 데이터가 fasle임으로 try-cathc 블록에 막혀 에러 발생",
        p: playerData.message,
        a: authData.message,
      },
      { status: 404, statusText: "false" }
    );
  }

  return {
    authData,
    playerData,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const day = formData.get("matchDay");
  const matchTeam = formData.get("matchTeam");
  const matchDesc = formData.get("ratingDescription");
  const title = formData.get('title')
  const ratings = JSON.parse(formData.get("ratings"));
  const postData = {
    title,
    day,
    matchTeam,
    matchDesc,
    ratings,
  };

  const response = await fetch("http://localhost:8080/rating/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "rating 정보를 전달하는 중에 에러가 발생했습니다.",
      }),
      {
        status: 404,
        statusText: "rating frontend err",
      }
    );
  }

  const resData = await response.json();

  if(resData.status === false){
    return resData
  } else if(resData.status === true){
    return redirect('/player-rating?page=1')
  }

}
