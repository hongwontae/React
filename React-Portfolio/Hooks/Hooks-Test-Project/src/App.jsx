import "./App.css";
import RiverPool from "../components/useReducerComponents/RiverPool";
import Player from "../components/Player";
import ScreenStart from "../components/dialog/ScreenStart";
import Test1 from "../components/EffectTest/Test1";
import { useState } from "react";

function App() {

  const [mount, unMount] = useState(false);



  return (
    <>
      <Player />
      <div id="challenges"></div>

      <RiverPool></RiverPool>

      <div>
        <ScreenStart></ScreenStart>
      </div>

      <div style={{ marginTop: 100 }}>
        {mount ? <Test1></Test1> : undefined}
        <button onClick={()=>unMount(!mount)}>Toggle</button>
      </div>
    </>
  );
}

export default App;
