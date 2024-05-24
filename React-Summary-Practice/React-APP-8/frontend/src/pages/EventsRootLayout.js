import EventsNavigation from "../components/EventsNavigation";

import { Outlet, useNavigation } from "react-router-dom";

function EventRootLayout() {
  return (
    <>
      {" "}
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  );
}

export default EventRootLayout;
