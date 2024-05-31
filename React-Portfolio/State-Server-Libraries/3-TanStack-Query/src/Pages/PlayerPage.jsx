/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { fetchGetPlayers } from "../util/http";
import PlayerOne from "../components/player/PlayerOne";
import MainNavigation from "../components/navigation/MainNavigation";

function PlayerPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["player"],
    queryFn: ({ signal }) => {
      console.log('playerPage queryFn')
      return fetchGetPlayers({ signal: signal });
    },
    staleTime : 5000
  });

  let content;

  if (isPending) {
    content = <p>로딩중입니다. 조금만 기다려주세요</p>;
  }

  if (isError) {
    content = (
      <>
        <MainNavigation></MainNavigation>
        <p>
          에러가 발생했습니다. MainNavi를 이용해서 벗어나고 다시 시도해주십시오.
        </p>
      </>
    );
  }

  if (data) {
    content = (
      <ul>
        {data.map((ele) => {
          return (
            <li key={ele.id}>
              <PlayerOne
                id={ele.id}
                name={ele.name}
                email={ele.email}
                body={ele.body}
              ></PlayerOne>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <h1 className="text-3xl">LiverPool Player List</h1>
      {content}
    </>
  );
}

export default PlayerPage;
