import React, { useState } from "react";
import AuthContext from "../Context/auth-context";

const DataState = () => {
  const [divState, setDivState] = useState("This is Anfiled");

  const divChangeHandler = () => {
    setDivState("This is HWT Home!!");
    console.log("Change");
  };

  return (
    <React.Fragment>
      <AuthContext.Consumer>
        {(ctx) => {
          <div>
            <div onClick={divChangeHandler}>{divState}</div>
            <div>{ctx.isValid}</div>
          </div>;
        }}
      </AuthContext.Consumer>
    </React.Fragment>
  );
};

export default DataState;
