import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [checkbox, setCheckbox] = useState(false);

  const buttonText = color === "red" ? "blue" : "red";

  function buttonColorHandler() {
    setColor(buttonText);
  }

  function checkboxHandler() {
    setCheckbox(!checkbox);
  }

  return (
    <div>
      <button
        role="button"
        className={checkbox ? 'gray' : color}
        onClick={buttonColorHandler}
        disabled={checkbox ? true : false}
      >
        Change {buttonText}!
      </button>
      <div>
        <label htmlFor="disable-button-checkbox" aria-label="dbc">
          Check
        </label>
        <input
          id="disable-button-checkbox"
          type="checkbox"
          onClick={checkboxHandler}
          value={checkbox}
        ></input>
      </div>
    </div>
  );
}

export default App;
