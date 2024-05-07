import "./App.css";
import RiverPool from "../components/useReducerComponents/RiverPool";
import Player from "../components/Player";
import ScreenStart from "../components/dialog/ScreenStart";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <RiverPool></RiverPool>
      <div>
        <ScreenStart></ScreenStart>
      </div>
    </>
  );
}

export default App;
