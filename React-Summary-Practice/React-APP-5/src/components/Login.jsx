import Input from "./Input";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    didEit: didEditEmail,
    enteredState: enteredStateEmail,
    handleBlur : handleBlurEmail,
    inputHandler : inputHandlerEmail,
  } = useInput("", false);

  const {
    enteredState: enteredStatePassword,
    handleBlur : handleBlurPassword,
    inputHandler : inputHandlerPassword,
  } = useInput("", false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredStateEmail);
    console.log(enteredStatePassword)
  }

  let emailState = didEditEmail && !enteredStateEmail.includes("@");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredStateEmail}
          onChange={(event) => inputHandlerEmail(event)}
          onBlur={() => handleBlurEmail()}
        ></Input>

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredStatePassword}
          onChange={(event) => inputHandlerPassword(event)}
          onBlur={() => handleBlurPassword()}
        ></Input>
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
