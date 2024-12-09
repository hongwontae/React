import { useEffect } from "react";
import { fetchStore } from "../store/RequestState";

function RequestComponent() {
  const { loading, data, fetchData } = fetchStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h3>Hello-RequestComponent</h3>
      <div style={{marginBottom : '10rem'}}>
        {data.map((ele) => {
          return (
            <div style={{ fontWeight: "bold" }} key={ele.id}>
              {ele.title}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RequestComponent;
