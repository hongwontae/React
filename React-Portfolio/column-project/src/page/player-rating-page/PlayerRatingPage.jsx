/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import PlayerRatingContainer from "../../components/player-rating/PlayerRatingContainer.jsx";

function PlayerRatingPage() {
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <PlayerRatingContainer data={data.items}></PlayerRatingContainer>
    </>
  );
}

export default PlayerRatingPage;

export async function pRatLoader({ request, params }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const response = await fetch(
    `http://localhost:5000/rating/prat?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed Data");
  }

  const resData = await response.json();

  return resData;
}
