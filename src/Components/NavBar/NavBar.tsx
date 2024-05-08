import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { RemoveClass } from "../../Utility/utility";

const navlinks = ["Home", "Favorites", "Completed"];

const NavBar = () => {
  const handleClick = () => {
    const searchContainer = document.querySelector(
      ".SearchContainer"
    ) as HTMLElement;

    const searchInput = document.querySelector(
      "#search-input"
    ) as HTMLInputElement;

    searchInput.value = "";

    searchContainer.classList.remove("show-search");
    RemoveClass("Book", "show");
  };

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
                onClick={handleClick}
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
