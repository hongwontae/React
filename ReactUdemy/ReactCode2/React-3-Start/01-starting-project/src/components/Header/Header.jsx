import React from "react";
import img2 from "../../assets/react-core-concepts.png";
import './Header.css'

const Header = () => {

  console.log()

  return (
    <React.Fragment>
      <header>
        <img src={img2} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
