import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

const navlinks = ["Home", "Favorites", "Completed"];

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Enchanted Pages</h1>

      <ul>
        <Search />
        {navlinks.map((navlink) => {
          return (
            <li key={navlink}>
              <NavLink
                to={`/${navlink.toLocaleLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {navlink}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
