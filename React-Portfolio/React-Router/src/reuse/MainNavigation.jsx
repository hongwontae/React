import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.naviUl}>
            <li className={classes.liFirst}>
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
                to="get"
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Board
              </NavLink>
            </li>
            <li>
              <NavLink
                to="form"
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="counter"
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Counter
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
