import { useLoaderData } from "react-router";

function PlayerRatingResult() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <article className="w-full">
        <h1 className="text-red-500 font-bold text-2xl mb-8">
          Rating - Report
        </h1>
        <div className="flex justify-center gap-10 w-4/5 items-center">
          <div className="border-[1px] p-4 w-1/2">
            <h2 className="mb-2 text-red-400 font-bold">Rating</h2>
            <div className="flex flex-col gap-2">
              {data.map((ele) => {
                return (
                  <div key={ele.ratingId}>
                    {ele.player.playerName} - {ele.rating}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-[1px] p-2 flex flex-col gap-4 w-1/2">
            <h2 className="text-red-400 font-bold">Summary</h2>
            <div>Date - {data[0].ratingDate.slice(0, 10)}</div>
            <div>Oppenent - {data[0].ratingOppenent}</div>
            <div className="overflow-hidden">
              <div>Description</div>
              <p className="whitespace-pre-wrap"></p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default PlayerRatingResult;

export async function loader({ params }) {
  const paramsDate = params.date;
  console.log(paramsDate);
  const response = await fetch(
    `http://localhost:5000/rating/prat/one?date=${paramsDate}`
  );

  const resData = await response.json();

  return resData;
}
