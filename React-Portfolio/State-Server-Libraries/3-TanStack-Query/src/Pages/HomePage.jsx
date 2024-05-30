import { useState } from "react";

import HomeButton from "../components/usage/HomeButton";
import HomeText from "../components/home/HomeText";
import HomeAdminText from "../components/home/HomeAdminText";

function HomePage() {
  const [toggleText, setToggleText] = useState(false);
  const [toggleAdminText, setToggleAdminText] = useState(false);

  function toggleTextHandler() {
    setToggleText(!toggleText);
  }

  function toggleAdminTextHandler() {
    setToggleAdminText(!toggleAdminText);
  }

  return (
    <>
      <section className="font-serif">
        <h1 className="text-5xl mb-5 text-red-500">LiverPool Column</h1>

        <HomeButton onClick={toggleTextHandler}>
          Click and Liverpool Description
        </HomeButton>

        <HomeText toggle={toggleText}></HomeText>

        <HomeButton onClick={toggleAdminTextHandler}>
          Click and ADMIN Latest News
        </HomeButton>

        <HomeAdminText toggleAdmin={toggleAdminText}></HomeAdminText>
      </section>
    </>
  );
}

export default HomePage;
