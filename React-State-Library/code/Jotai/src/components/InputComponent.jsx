import { inputData} from "../store/InputState";
import { useAtom } from "jotai";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: red;
`;

function InputComponent() {
  const [inputState, setInputState] = useAtom(inputData);
  // const [readState] = useAtom(readData)



  return (
    <>
      <Container>
        <label>Name</label>
        <input
          type="text"
          value={inputState.name}
          onChange={(e) =>
            setInputState((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={inputState.age}
          onChange={(e) =>
            setInputState((prev) => ({ ...prev, age: e.target.value }))
          }
        ></input>
      </Container>
    </>
  );
}

export default InputComponent;
