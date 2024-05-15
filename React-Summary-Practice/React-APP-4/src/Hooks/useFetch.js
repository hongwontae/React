import { useState } from "react";
import { useEffect } from "react";


export function useFetch(fetchFn, initialValue){

    const [isLoading, setIsLoading] = useState();
    const [isError, setIsError] = useState();
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
          try {
            const places = await fetchFn();
            setData(places);
          } catch (error) {
            setIsError({ message: error.message || 'Failed to fetch user places.'});
          }
          setIsLoading(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isLoading,
        isError,
        data,
        setIsLoading,
        setData
      }
}