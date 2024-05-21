import { useState } from "react";
import "./App.css";
import Effect from "./components/Effect";
import CheckCom from "./components/CheckCom";

function App() {
  const [test, setTest] = useState(false);

  const [data, setData] = useState('Hello!');

  const [modal, setModal] = useState('');

  

  return (
    <>
    <CheckCom modal={modal} modalHide={setModal}></CheckCom>
    <button onClick={()=>setModal('check')}>Check Modal</button>
      {test ? <Effect data='He' sss={data}></Effect> : undefined}{" "}
      <button onClick={() => setTest(!test)}>Button!</button>
      <div>
        <input onChange={(e)=>setData(e.target.value)} value={data}></input>
        <p>{data}</p>
      </div>
    </>
  );
}

export default App;
