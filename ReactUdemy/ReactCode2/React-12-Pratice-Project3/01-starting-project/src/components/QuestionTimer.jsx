import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {

  const [remainingTime, setRemaingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);


  useEffect(() => {
    const interval = setInterval(() => {
      setRemaingTime((prevState) => {
        return prevState - 100;
      });
      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} className={mode}></progress>
  );
}
