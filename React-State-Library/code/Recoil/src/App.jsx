import { styled } from "styled-components";
import Form from "./components/Form";
import Modal from "./components/Modal";
// import Test from "./components/Test";
import Test2 from "./components/Test2";

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 0;
  padding : 1rem;
  font-weight: bold;
`;

const Allcontainer = styled.div`
  height: 100vh;
  background-color: #123456;
`;

function App() {
  return (
    <>
      <Allcontainer>
        <Title>Hello-world</Title>
        <Form></Form>
        <Modal></Modal>
        <Test2></Test2>
      </Allcontainer>
    </>
  );
}

export default App;
