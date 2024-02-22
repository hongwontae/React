import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/detail"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rerender"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              rerendering?
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
