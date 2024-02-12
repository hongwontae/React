import { useLoaderData } from "react-router-dom";

function DetailsInfo() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div>
        <div>{`동적 세그먼트는 ${data.id}입니다.`}</div>
        <div></div>
        <div>제목</div>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.userId}</p>
      </div>
    </>
  );
}

export default DetailsInfo;

export async function loader({ params }) {
  const dynamicSegment = params.dataId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${dynamicSegment}`
  );
  const data = await response.json();

  return data;
}
