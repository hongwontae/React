import { styled } from "styled-components";
import {useContext} from 'react';
import {InputContext} from '../store/InputContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2rem;
  align-items: center;
`;

const SContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
`

function InputComponent() {

    const {age, name, setInputState} = useContext(InputContext)

    console.log('input-component')

    function nameHandler(e){
        setInputState(prev=>{
            return {
                ...prev,
                name : e.target.value
            }
        })
    }

    function ageHandler(e){
        setInputState(prev=>{
            return {
                ...prev,
                age : e.target.value
            }
        })
    }


  return (
    <>
      <Container>
        <SContainer>
          <label>Name</label>
          <input type="text" value={name} onChange={(e)=>nameHandler(e)}></input>
        </SContainer>
        <SContainer>
          <label>Age</label>
          <input type="number" value={age} onChange={(e)=>ageHandler(e)}></input>
        </SContainer>
        <div>{name}</div>
        <div>{age}</div>
      </Container>
    </>
  );
}

export default InputComponent;
