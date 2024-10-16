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
import { PageCtx } from "../../context/PageContext";
import PlayerRatingForm from "../../components/player-rating-form/playerRatingForm";
import { RatingCtx } from "../../context/RatingContext";

function PlayerRatingFormPage() {
  const navigate = useNavigate();

  const acData = useActionData();

  const [selectedData, setSelectedData] = useState("맨체스터 시티");
  const [actionData, setActionData] = useState(null);

  const { setStartingMember, setSubstanceMember } = useContext(RatingCtx);

  const loaderData = useLoaderData();
  const startMember = loaderData.playerData.startMember;
  const subMember = loaderData.playerData.substanceMember;

  useEffect(() => {
    setStartingMember(startMember);
    setSubstanceMember(subMember);
  }, [loaderData, setStartingMember, setSubstanceMember]);

  useEffect(() => {
    if (loaderData.authData.status === false) {
      navigate("/");
    }
  }, [loaderData, navigate]);

  useEffect(() => {
    setActionData(actionData?.message);
  }, [acData]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-extralight">Player Rating Form</h1>
        <PlayerRatingForm
          selectedData={selectedData}
          SetSelectedData={setSelectedData}
          actionData={actionData}
        ></PlayerRatingForm>
      </div>
    </>
  );
}

export default PlayerRatingFormPage;

export async function loader() {
  const [authResponse, playerResponse] = await Promise.all([
    fetch("http://localhost:5000/auth/single/check", {
      method: "POST",
      credentials: "include",
    }),
    fetch("http://localhost:5000/player/get/playerAll"),
  ]);

  const authData = await authResponse.json();
  const playerData = await playerResponse.json();

  if (!authResponse.ok || !playerResponse.ok) {
    throw new Response(JSON.stringify({ message: "http 전송 중 에러" }), {
      status: 404,
      statusText: "Hello-world",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log(authData);
  console.log(playerData);

  return {
    authData,
    playerData,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const day = formData.get("matchDay");
  const team = formData.get("matchTeam");
  const desc = formData.get("ratingDescription");
  const ratings = formData.get("ratings");
  const postData = {
    day,
    team,
    desc,
    ratings,
  };

  const response = await fetch("http://localhost:5000/rating/post/register", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json({ message: "HTTP request Failed" }, { status: 404,  });
  }

  const resData = await response.json();
  console.log(resData);

  if (resData?.errorData?.statusCode === 404) {
    return resData;
  }

  return resData;
}
