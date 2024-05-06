import { useState } from "react";
import { styled } from "styled-components";

import { StyledButton } from "./Button";

import CustomInput from "./Input";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-botton: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <StyledDiv>
        <p>
          <CustomInput
          label="E-Mail"
          type="Email"
          invalid={emailNotValid}
          onChnage={(event)=>{
            return  handleInputChange('email', event.target.value)
          }}
          ></CustomInput>
        </p>
        <p>
          <CustomInput
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChnage={(event)=>{
            return  handleInputChange('password', event.target.value)
          }}
          ></CustomInput>
        </p>
      </StyledDiv>
      <div className="actions">
        <StyledButton type="button" className="text-button">
          Create a new account
        </StyledButton>
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
