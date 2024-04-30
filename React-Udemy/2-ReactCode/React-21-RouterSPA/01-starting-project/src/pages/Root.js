import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main >
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Root;
