import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import Player3 from "./components/Player3";
import ChangeRootContext from "./store/store";

function App() {


const Koala3121 = ()=>{
  return (
    <>
      <div>goodLuck</div>
    </>
  )
}

  return (
    <>
      <ChangeRootContext>
        <Player1 Com1={<Koala3121></Koala3121>}></Player1>
        <Player2></Player2>
        <Player3></Player3>
      </ChangeRootContext>
    </>
  );
}

export default App;
