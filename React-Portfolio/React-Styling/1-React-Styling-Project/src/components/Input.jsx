import styled from "styled-components";

 const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ invalid }) => {
    return invalid ? "#f87171" : "#6b7280";
  }};
`;

 const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $inValid }) => {
    return $inValid ? "#fed2d2" : "#d1d5db";
  }};
  color: ${({ $inValid }) => {
    return $inValid ? "#ef4444" : "#374151";
  }};
  border: 1px solid
    ${({ $inValid }) => {
      return $inValid ? "#f73f3f" : "transparent";
    }};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

// eslint-disable-next-line react/prop-types
export default function CustomInput({label, invalid, ...props}){

    return(
        <>
            <StyledLabel $inValid={invalid}>{label}</StyledLabel>
            <StyledInput $inValid={invalid} {...props}></StyledInput>
        </>
    )
}
