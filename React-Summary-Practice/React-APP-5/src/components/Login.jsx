import { useState } from "react";

export default function Login() {
  const [enteredState, setEnteredState] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredState.email);
    console.log(enteredState.password);
  }

  function inputHandler(event, identfier) {
    setEnteredState((prevState) => {
      return {
        ...prevState,
        [identfier]: event.target.value,
      };
    });
  }

  let emailState = enteredState.email !== "" && !enteredState.email.includes("@");
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredState.email}
            onChange={(event) => inputHandler(event, "email")}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredState.password}
            onChange={(event) => inputHandler(event, "password")}
          />
        </div>
      </div>

      <div className="control-error">
        {emailState && <p>Error 처리 요망</p>}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
