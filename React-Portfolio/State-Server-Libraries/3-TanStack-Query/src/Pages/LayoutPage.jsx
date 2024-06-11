import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import LiverPoolFooter from "../components/footer/LiverPoolFooter";

function LayoutPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <MainNavigation></MainNavigation>

        <div className="mx-auto py-3  ">
            <Outlet></Outlet>
          </div>
        <LiverPoolFooter></LiverPoolFooter>
      </main>
    </>
  );
}

export default LayoutPage;
