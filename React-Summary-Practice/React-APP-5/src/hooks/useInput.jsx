import { useState } from "react";

export function useInput(inputValue, bolValue){
    const [enteredState, setEnteredState] = useState(inputValue);
    
      const [didEit, setDidEit] = useState(bolValue);

      function inputHandler(event) {
        setEnteredState(event.target.value)
        setDidEit(false)
      }
    
      function handleBlur() {
        setDidEit(true)
      }

      return {
        enteredState,
        inputHandler,
        handleBlur,
        didEit
      }
}