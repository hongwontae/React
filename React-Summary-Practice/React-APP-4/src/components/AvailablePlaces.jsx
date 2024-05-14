import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import Error from './Error.jsx';

import {sortPlacesByDistance} from '../loc.js'
import {httpFunction1} from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const httpData = await httpFunction1();

        navigator.geolocation.getCurrentPosition((p)=>{
          const sortedData = sortPlacesByDistance(
            httpData.places,
            p.coords.latitude,
            p.coords.longitude
          );
          setAvailablePlaces(sortedData);
          setIsFetching(false); // 해당 함수 호출이 비동기라 setIsFetching이 여기에 왔다.
        })

      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
      }
      setIsFetching(false);

    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}