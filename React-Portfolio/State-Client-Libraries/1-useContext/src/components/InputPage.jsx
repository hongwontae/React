import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { ButtonContext } from "../context/ButtonContext";

function InputPage() {
  const { inputData, changeInput } = useContext(InputContext);
  
  const {data, chnageData} = useContext(ButtonContext)

  return (
    <>
      <div>Input-Components</div>
      <div>{data}</div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => changeInput(e)}
      ></input>
      <button onClick={()=>chnageData(inputData)}>Input-Change-Button</button>
    </>
  );
}

export default InputPage;
