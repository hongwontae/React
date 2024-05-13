import { useState } from "react";
import "./App.css";
import Effect from "./components/Effect";

function App() {
  const [test, setTest] = useState(false);

  const [data, setData] = useState('Hello!');

  return (
    <>
      {test ? <Effect data='He'></Effect> : undefined}{" "}
      <button onClick={() => setTest(!test)}>Button!</button>
      <div>
        <input onChange={(e)=>setData(e.target.value)} value={data}></input>
        <p>{data}</p>
      </div>
    </>
  );
}

export default App;
