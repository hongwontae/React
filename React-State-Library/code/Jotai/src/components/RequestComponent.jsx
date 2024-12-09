import { useTransition } from 'react';
import { useAtom } from 'jotai';
import { WritableRequestAtom } from '../store/RequestState';

function RequestComponent() {
  const [data, setData] = useAtom(WritableRequestAtom);
  const [isPending, startTransition] = useTransition(); // startTransition 사용

  console.log(data);

  function clickHandler() {
    startTransition(() => {
      setData(2); // 비동기 데이터를 설정하는 부분
    });
  }

  return (
    <>
      <h3>Hello</h3>
      {isPending ? (
        <div>Loading...</div> // 로딩 중일 때 표시할 부분
      ) : (
        <div>{data.title}</div>
      )}
      <button onClick={clickHandler}>Click</button>
    </>
  );
}

export default RequestComponent;