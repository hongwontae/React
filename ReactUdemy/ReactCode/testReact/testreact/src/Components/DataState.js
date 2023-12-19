import React, { useContext, useState } from "react";
import AuthContext from "../Context/auth-context";

const DataState = () => {
  const [divState, setDivState] = useState("This is Anfiled");

  const divChangeHandler = () => {
    setDivState("This is HWT Home!!");
    console.log("Change");
  };

  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      {ctx.isValid}
      <div onClick={divChangeHandler}>
        {divState}
      </div>
      <div onClick={ctx.idChangeHandler}>
        GAME Set
      </div>
    </React.Fragment>
  );
};

export default DataState;
