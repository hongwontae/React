const Tabs = ({ children, buttons, ButtonContainer, Good}) => {
  return (
    <>
      {Good}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
