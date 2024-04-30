import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    hasError: emailHasError,
    handleInputBlur: handleEmailBlur,
    handleInputData: handleEmailChange,
    value: emailValue,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    handleInputBlur: handlePasswordBlur,
    handleInputData: handlePasswordChange,
    hasError : passwordHasError,
    value : passwordValue,
  } = useInput("", (value) => {
    hasMinLength(value, 6);
  });

  function handleSubmit(e) {
    e.preventDefault();

    if(emailHasError || passwordHasError){
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          name="email"
          type="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        ></Input>
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        ></Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
