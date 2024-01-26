import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import {fetchfunc} from "../logicObj.js"

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // fetching 중이라는 상태
  const [AvailablePlaces, setAvailablePlaces] = useState([]); // 데이터를 가져오는 상태
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const fetchData = await fetchfunc();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            fetchData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || "Fetch Fail data Sorry girl and man im not femi",
        });
      }
    }
    fetchData();
  }, []); // Mount 시에만 실행

  if (error) {
    return <Error title="Error가 발생했습니다" message={error.message}></Error>;
  }

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
