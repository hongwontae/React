import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header className="max-w-5xl m-auto p-8 flex justify-center text-customFontSize ">
        <nav>
          <ul className={`flex gap-7 `}>
            <li className={classes.list}>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
                end
              >
                HomePage
              </NavLink>
            </li>
            <li className={classes.list}>
              <NavLink
                to={"/play-result"}
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
                end
              >
                Play-Result
              </NavLink>
            </li>
            <li className={classes.list}>
              <NavLink
                to={"/play-result-form"}
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
                end
              >
                Play-Result-Form
              </NavLink>
            </li>
            <li className={classes.list}>
              <NavLink
                to={"/player-rating"}
                className={({ isActive }) => {
                  return isActive ? classes.active : null;
                }}
                end
              >
                Player-Rating
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
