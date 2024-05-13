import { useState } from "react";
import "./App.css";
import Effect from "./components/Effect";

function App() {
  const [test, setTest] = useState(false);

  return (
    <>
      {test ? <Effect data='He'></Effect> : undefined}{" "}
      <button onClick={() => setTest(!test)}>Button!</button>
    </>
  );
}

export default App;
