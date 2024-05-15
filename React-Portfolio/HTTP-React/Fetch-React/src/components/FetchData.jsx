/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import RenderData from "./RenderData";
import ErrorPage from "./ErrorPage";

function FetchData({onDelete}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError("fail");
        setIsLoading(false);
      }
    }

    fetchFunction();
  }, []);

  if (error) {
    return <ErrorPage title={error}></ErrorPage>;
  }

  return (
    <>
      {isLoading ? (
        <p style={{ fontSize: 100 }}>Data is not Comming</p>
      ) : (
        data.map((ele) => {
          return (
            <div key={ele.id}>
              <RenderData onDelete={onDelete} title={ele.title} id={ele.id}></RenderData>
            </div>
          );
        })
      )}
    </>
  );
}

export default FetchData;
