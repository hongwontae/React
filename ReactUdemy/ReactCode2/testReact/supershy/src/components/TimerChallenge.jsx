import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  const timerStartHandle = () => {
    timer.current = setTimeRemaining((prevState) => {
      return prevState - 10;
    }, 10);
  };

  const timerStopHandle = () => {
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        onReset={handleReset}
        targetTime={targetTime}
        remianTime={timeRemaining}
      ></ResultModal>
      
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? timerStopHandle : timerStartHandle}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is Running" : "Timer is done"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
