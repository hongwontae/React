import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function LayoutPage() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default LayoutPage;
