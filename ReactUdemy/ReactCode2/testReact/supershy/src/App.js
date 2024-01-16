import Player from "./components/Player";
import {useState} from 'react';


function App() {

  const [change, setChange] = useState('Good Data');

  function clickTrueHandler() {
    setChange('True Data')
  }
  function clickNotHandler(){
    setChange('False Data')
  }

  return (
    <>
      <Player trueChange={clickTrueHandler} falseChange={clickNotHandler} clickData={change}></Player>
    </>
  );
}

export default App;
