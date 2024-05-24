import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Layout() {

    const navigation = useNavigation();

  return (
    <>
      <MainNavigation></MainNavigation>
      {navigation.state === 'loading' && <p>Loading.....</p>}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Layout;
