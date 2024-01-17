import Player from "./components/Player";
import ChangeRootContext from "./store/store";

function App() {
  return (
    <>
      <ChangeRootContext>
        <Player></Player>
      </ChangeRootContext>
    </>
  );
}

export default App;
