import classes from "./MainNavigation.module.css";

import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              end
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events/new"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
