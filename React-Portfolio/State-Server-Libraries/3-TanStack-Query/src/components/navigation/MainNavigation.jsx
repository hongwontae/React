import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
                end
              >
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/player"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                Player
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pEvaluation"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                Player-Evalutation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/match"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                Match-Description
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                test
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testGet"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                testGet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historyForm"
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
              >
                historyForm
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
