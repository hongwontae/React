import { useQuery } from "@tanstack/react-query";
import { fetchGetTest } from "../util/http";

function TestGetPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["testGet"],
    queryFn: ({ signal }) => {
      return fetchGetTest({ signal });
    },
  });

  let content;

  if (isPending) {
    content = <p>로딩중입니다. 잠시만 기다려주세요</p>;
  }

  if (isError) {
    content = <p>에러가 발생했네요 {error}</p>;
  }

  if (data) {
    
    content = (
      <ul>
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <li>{ele.title}</li>
              <li>{ele.content}</li>
            </div>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <h1 className="mb-10 text-3xl">Get Tage</h1>
      {content}
    </>
  );
}

export default TestGetPage;
