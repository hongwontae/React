import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player></Player>
      <TimerChallenge title={"Easy"} targetTime={1}></TimerChallenge>
      <TimerChallenge title={"medium"} targetTime={5}></TimerChallenge>
      <TimerChallenge title={"High"} targetTime={10}></TimerChallenge>
      <TimerChallenge title={"Go High"} targetTime={15}></TimerChallenge>
    </>
  );
}

export default App;
