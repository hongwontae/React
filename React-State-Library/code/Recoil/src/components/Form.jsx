import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { inputState, inputSelector } from "../recoil-state/InputState";
import { styled } from "styled-components";
import { ModalState } from "../recoil-state/modalState";

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Form() {
  const [inputSt, setInputSt] = useRecoilState(inputState);
  const setModal = useSetRecoilState(ModalState)
  const resetHandler = useResetRecoilState(inputState)
  const nameCount = useRecoilValue(inputSelector)


  function nameResetHandler(){
    setInputSt(prev => {
      return {
        ...prev,
        name : ''
      }
    })
  }

  function ageResetHandler(){
    setInputSt(prev=>{
      return {
        ...prev,
        age : ''
      }
    })
  }

  return (
    <>
      <FormComponent >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={inputSt.name}
            onChange={(e) =>
              setInputSt((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputSt.age}
            onChange={(e) =>
              setInputSt((prev) => ({ ...prev, age: e.target.value }))
            }
          ></input>
        </div>
            <button type="button" onClick={resetHandler}>Reset</button>
            <button type="button" onClick={nameResetHandler}>NameReset</button>
            <button type="button" onClick={ageResetHandler}>AgeReset</button>
            <button type="button" onClick={()=>setModal(true)}>Modal!</button>

            <div>Name Length is {nameCount}</div>
      </FormComponent>
    </>
  );
}

export default Form;
