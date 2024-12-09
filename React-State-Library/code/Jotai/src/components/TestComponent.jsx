import { useAtom } from "jotai";
import { countAtom, doubledCountAtom } from "../store/TestState";

function TestComponent() {
  const [countState, setCountState] = useAtom(countAtom); // 객체 상태
  const [doubledCount] = useAtom(doubledCountAtom); // 파생 상태

  // 상태 업데이트 시 객체 불변성을 유지하면서 업데이트
  const increment = () => {
    setCountState((prevState) => ({ count: prevState.count + 1 }));
  };

  return (
    <div>
      <div>Count: {countState.count}</div>
      <div>Doubled Count: {doubledCount}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default TestComponent;
