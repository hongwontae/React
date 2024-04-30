import { useRecoilState, useRecoilValue } from "recoil";
import { textState, textSelector } from "../store/atom";

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const value = useRecoilValue(textSelector)

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <>
      
        <input type="text" onChange={changeText}/>
        <br />
        <div>{text}</div>
        <div>{value}</div>
        
      
      <div>

      </div>
    </>
  );
}

export default TextInput;
